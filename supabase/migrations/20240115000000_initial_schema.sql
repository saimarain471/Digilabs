-- ============================================
-- CartCloudy Database Schema
-- Digital Accounts Marketplace
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- Categories Table
-- ============================================
CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    icon TEXT,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Insert default categories
INSERT INTO categories (name, slug, icon, description) VALUES
('Streaming', 'streaming', '📺', 'Netflix, Disney+, Hulu and more'),
('Gaming', 'gaming', '🎮', 'Premium gaming accounts'),
('Xbox Game Pass', 'xbox-game-pass', '🎯', 'Xbox subscriptions'),
('Courses', 'courses', '📚', 'Free educational content'),
('AI Tools', 'ai-tools', '🤖', 'ChatGPT, Claude, AI services'),
('Creative Software', 'creative', '🎨', 'Adobe, Canva, design tools'),
('VPN & Security', 'vpn', '🔒', 'Privacy and security tools'),
('Music Streaming', 'music', '🎵', 'Spotify, Apple Music, etc.')
ON CONFLICT (slug) DO NOTHING;

-- ============================================
-- Products Table
-- ============================================
CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    thumbnail_url TEXT,
    short_description TEXT,
    full_description TEXT,
    category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
    category TEXT NOT NULL,
    is_featured BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Create indexes for performance
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_featured ON products(is_featured) WHERE is_featured = true;
CREATE INDEX idx_products_active ON products(is_active) WHERE is_active = true;

-- ============================================
-- Plans Table
-- ============================================
CREATE TABLE IF NOT EXISTS plans (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    duration_months INTEGER NOT NULL DEFAULT 1,
    price_usd DECIMAL(10,2) NOT NULL,
    price_pkr INTEGER NOT NULL,
    price_inr INTEGER NOT NULL,
    features TEXT[] DEFAULT '{}',
    is_popular BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Create indexes
CREATE INDEX idx_plans_product ON plans(product_id);
CREATE INDEX idx_plans_popular ON plans(is_popular) WHERE is_popular = true;
CREATE INDEX idx_plans_active ON plans(is_active) WHERE is_active = true;

-- ============================================
-- Users Table
-- ============================================
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT,
    avatar_url TEXT,
    role TEXT DEFAULT 'customer' CHECK (role IN ('admin', 'customer')),
    phone TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc', now());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_plans_updated_at BEFORE UPDATE ON plans
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- Orders Table
-- ============================================
CREATE TABLE IF NOT EXISTS orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    order_number TEXT NOT NULL UNIQUE,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'cancelled')),
    total_amount DECIMAL(10,2) NOT NULL,
    currency_used TEXT NOT NULL CHECK (currency_used IN ('USD', 'PKR', 'INR')),
    items_json JSONB NOT NULL,
    customer_email TEXT,
    customer_name TEXT,
    whatsapp_sent BOOLEAN DEFAULT false,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_date ON orders(created_at DESC);

-- ============================================
-- FAQs Table
-- ============================================
CREATE TABLE IF NOT EXISTS faqs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

CREATE INDEX idx_faqs_product ON faqs(product_id);

-- ============================================
-- Analytics Events Table
-- ============================================
CREATE TABLE IF NOT EXISTS analytics_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_name TEXT NOT NULL,
    event_data JSONB,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    session_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

CREATE INDEX idx_analytics_events_name ON analytics_events(event_name);
CREATE INDEX idx_analytics_events_date ON analytics_events(created_at DESC);

-- ============================================
-- Row Level Security (RLS)
-- ============================================
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;

-- Create policies (simplified for demo)
CREATE POLICY "Public can view active products" ON products
    FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view active plans" ON plans
    FOR SELECT USING (is_active = true);

CREATE POLICY "Users can view their own data" ON users
    FOR SELECT USING (auth.uid() = id);

-- ============================================
-- Full Text Search Setup
-- ============================================
ALTER TABLE products ADD COLUMN IF NOT EXISTS search_vector tsvector;

CREATE OR REPLACE FUNCTION products_search_vector_update() RETURNS trigger AS $$
BEGIN
  NEW.search_vector := to_tsvector('english', coalesce(NEW.title,'') || ' ' || coalesce(NEW.short_description,'') || ' ' || coalesce(NEW.full_description,''));
  RETURN NEW;
END $$ LANGUAGE plpgsql;

CREATE TRIGGER products_search_vector_trigger BEFORE INSERT OR UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION products_search_vector_update();

CREATE INDEX idx_products_search ON products USING gin(search_vector);

-- ============================================
-- Functions for API
-- ============================================

-- Function to get products with plans
CREATE OR REPLACE FUNCTION get_products_with_plans()
RETURNS TABLE(
  product_id UUID,
  title TEXT,
  slug TEXT,
  thumbnail_url TEXT,
  short_description TEXT,
  full_description TEXT,
  category TEXT,
  is_featured BOOLEAN,
  plans JSONB
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    p.id,
    p.title,
    p.slug,
    p.thumbnail_url,
    p.short_description,
    p.full_description,
    p.category,
    p.is_featured,
    COALESCE(json_agg(pl.*) FILTER (WHERE pl.id IS NOT NULL), '[]'::json) as plans
  FROM products p
  LEFT JOIN plans pl ON pl.product_id = p.id AND pl.is_active = true
  WHERE p.is_active = true
  GROUP BY p.id
  ORDER BY p.is_featured DESC, p.created_at DESC;
END;
$$ LANGUAGE plpgsql;

-- Function to get product by slug with plans and FAQs
CREATE OR REPLACE FUNCTION get_product_by_slug(slug_param TEXT)
RETURNS TABLE(
  product_id UUID,
  title TEXT,
  slug TEXT,
  thumbnail_url TEXT,
  short_description TEXT,
  full_description TEXT,
  category TEXT,
  is_featured BOOLEAN,
  plans JSONB,
  faqs JSONB
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    p.id,
    p.title,
    p.slug,
    p.thumbnail_url,
    p.short_description,
    p.full_description,
    p.category,
    p.is_featured,
    COALESCE(json_agg(DISTINCT pl.*) FILTER (WHERE pl.id IS NOT NULL), '[]'::json) as plans,
    COALESCE(json_agg(DISTINCT f.*) FILTER (WHERE f.id IS NOT NULL), '[]'::json) as faqs
  FROM products p
  LEFT JOIN plans pl ON pl.product_id = p.id AND pl.is_active = true
  LEFT JOIN faqs f ON f.product_id = p.id
  WHERE p.slug = slug_param AND p.is_active = true
  GROUP BY p.id;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- Seed Sample Data
-- ============================================
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Netflix Premium', 'netflix-premium', 'https://cdn.pixabay.com/photo/2016/03/27/19/42/netflix-1284353_960_720.jpg', '4K Ultra HD streaming with multiple profiles', 'Premium Netflix subscription with access to 4K Ultra HD content, multiple simultaneous streams, and the ability to create up to 5 profiles for family members.', 'Streaming', true),
('Disney+ Bundle', 'disney-plus-bundle', 'https://cdn.pixabay.com/photo/2021/08/28/09/03/disney-7380635_960_720.jpg', 'Disney+, Hulu, and ESPN+ combined', 'Get access to Disney+ Premium, Hulu (ad-supported), and ESPN+ in one convenient bundle. Perfect for families and sports enthusiasts.', 'Streaming', true),
('Xbox Game Pass Ultimate', 'xbox-game-pass-ultimate', 'https://cdn.pixabay.com/photo/2020/01/19/21/46/xbox-4779921_960_720.jpg', '100+ high-quality games on console, PC, and cloud', 'Play over 100 high-quality games on console, PC, and cloud. New games added all the time, plus exclusive member deals and discounts.', 'Xbox Game Pass', true),
('ChatGPT Plus', 'chatgpt-plus', 'https://cdn-icons-png.flaticon.com/512/906/906334.png', 'Advanced AI assistance with GPT-4', 'Get priority access to GPT-4, faster response times, and access to new features. Perfect for professionals, students, and anyone who needs reliable AI assistance.', 'AI Tools', true),
('Adobe Creative Cloud', 'adobe-creative-cloud', 'https://cdn-icons-png.flaticon.com/512/3303/3303398.png', 'Complete creative suite with 20+ apps', 'Access to Photoshop, Illustrator, Premiere Pro, After Effects, and all other Adobe Creative Cloud applications with 100GB cloud storage.', 'Creative Software', true)
ON CONFLICT (slug) DO NOTHING;

-- Insert plans for each product
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'netflix-premium'), '1 Month', 1, 12.99, 3500, 1099, ARRAY['4K Ultra HD', '4 Simultaneous Screens', '5 Profiles', 'Download on 4 Devices'], false),
((SELECT id FROM products WHERE slug = 'netflix-premium'), '3 Months', 3, 35.99, 9700, 2999, ARRAY['4K Ultra HD', '4 Simultaneous Screens', '5 Profiles', 'Download on 4 Devices', 'Save 8%'], true),
((SELECT id FROM products WHERE slug = 'netflix-premium'), '12 Months', 12, 129.99, 35000, 10999, ARRAY['4K Ultra HD', '4 Simultaneous Screens', '5 Profiles', 'Download on 4 Devices', 'Save 17%', 'Best Value'], false),
((SELECT id FROM products WHERE slug = 'disney-plus-bundle'), '1 Month', 1, 14.99, 4000, 1299, ARRAY['Disney+ Premium', 'Hulu (Ad-Supported)', 'ESPN+', '4K Streaming'], false),
((SELECT id FROM products WHERE slug = 'xbox-game-pass-ultimate'), '1 Month', 1, 14.99, 4000, 1299, ARRAY['100+ Games', 'Cloud Gaming', 'EA Play Included', 'Day-One Releases'], true);

-- ============================================
-- End of Schema
-- ============================================

-- Comment: To set up Google OAuth, add your Google Client ID and Secret to Supabase Auth Settings
-- Comment: Configure WhatsApp integration by setting NEXT_PUBLIC_WHATSAPP_PHONE in your .env.local file