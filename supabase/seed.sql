-- ============================================
-- CartCloudy - Seed Data
-- ============================================

-- ============================================
-- Insert Categories
-- ============================================
INSERT INTO categories (name, slug, icon, description, sort_order) VALUES
('Creativity', 'creativity', '🎨', 'Design and creative tools', 1),
('AI', 'ai', '🤖', 'Artificial Intelligence tools', 2),
('Tools', 'tools', '🛠️', 'Productivity and utility tools', 3),
('Streaming', 'streaming', '📺', 'Video and music streaming services', 4),
('VPN', 'vpn', '🔒', 'Security and privacy tools', 5),
('Social', 'social', '📱', 'Social media and marketing tools', 6)
ON CONFLICT (slug) DO NOTHING;

-- ============================================
-- Insert Products
-- ============================================

-- Canva Pro
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Canva Pro', 'canva-pro', 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png', 
'Professional design tool with premium templates and features', 
'Canva Pro gives you access to premium templates, brand kits, background remover, magic resize, and 100+ million premium stock photos, videos, audio, and graphics. Perfect for creating stunning social media posts, presentations, and marketing materials.',
'Creativity', true);

-- CapCut Pro
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('CapCut Pro', 'capcut-pro', 'https://cdn-icons-png.flaticon.com/512/3670/3670147.png',
'Professional video editing with advanced features',
'CapCut Pro unlocks advanced video editing features including premium effects, transitions, filters, and music. Export in 4K quality without watermarks. Perfect for content creators and social media influencers.',
'Creativity', true);

-- Adobe Creative Cloud
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Adobe Creative Cloud', 'adobe-creative-cloud', 'https://cdn-icons-png.flaticon.com/512/5968/5968428.png',
'Complete suite of creative applications',
'Get access to the entire Adobe Creative Cloud suite including Photoshop, Illustrator, Premiere Pro, After Effects, and more. Industry-standard tools for design, video, and photography.',
'Creativity', true);

-- ChatGPT Plus
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('ChatGPT Plus', 'chatgpt-plus', 'https://cdn-icons-png.flaticon.com/512/11865/11865326.png',
'Advanced AI assistant with GPT-4 access',
'ChatGPT Plus gives you priority access to GPT-4, faster response times, and access to new features first. Perfect for professionals, researchers, and anyone who needs powerful AI assistance.',
'AI', true);

-- Claude AI
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Claude AI', 'claude-ai', 'https://cdn-icons-png.flaticon.com/512/8637/8637099.png',
'Advanced AI assistant by Anthropic',
'Claude is an AI assistant that excels at analysis, writing, coding, and research. Known for its nuanced understanding and helpful responses.',
'AI', false);

-- Gemini Advanced
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Gemini Advanced', 'gemini-advanced', 'https://cdn-icons-png.flaticon.com/512/2702/2702602.png',
'Google''s most capable AI model',
'Gemini Advanced provides access to Google''s most capable AI model for complex reasoning, coding, and creative tasks. Integrated with Google Workspace.',
'AI', false);

-- Grok
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Grok', 'grok', 'https://cdn-icons-png.flaticon.com/512/5969/5969020.png',
'X''s AI assistant with real-time information',
'Grok is an AI assistant with access to real-time information from X (Twitter). Known for its witty responses and up-to-date knowledge.',
'AI', false);

-- Perplexity AI
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Perplexity AI', 'perplexity-ai', 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
'AI-powered research and search engine',
'Perplexity Pro offers unlimited AI searches, access to GPT-4 and Claude, and advanced features for research. Get cited answers from the web.',
'AI', false);

-- ElevenLabs
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('ElevenLabs', 'elevenlabs', 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png',
'AI voice generation and cloning',
'ElevenLabs offers the most realistic AI voice generation. Create voiceovers, clone voices, and generate speech in multiple languages.',
'AI', false);

-- Veo 3
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Veo 3', 'veo-3', 'https://cdn-icons-png.flaticon.com/512/1179/1179069.png',
'Google''s advanced AI video generation',
'Veo 3 is Google''s latest AI video generation model. Create stunning videos from text prompts with unprecedented quality and control.',
'AI', false);

-- RunwayML
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('RunwayML', 'runwayml', 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png',
'AI-powered creative video tools',
'RunwayML provides cutting-edge AI tools for video editing, generation, and effects. Create professional videos with Gen-2 AI.',
'AI', false);

-- HeyGen AI
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('HeyGen AI', 'heygen-ai', 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png',
'AI avatar video generation',
'HeyGen creates professional AI avatar videos. Perfect for marketing, training, and content creation without filming.',
'AI', false);

-- Envato Elements
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Envato Elements', 'envato-elements', 'https://cdn-icons-png.flaticon.com/512/5968/5968756.png',
'Unlimited creative assets downloads',
'Envato Elements offers unlimited downloads of stock photos, videos, music, graphics, templates, and more. Perfect for designers and creators.',
'Creativity', false);

-- Freepik Premium
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Freepik Premium', 'freepik-premium', 'https://cdn-icons-png.flaticon.com/512/5968/5968853.png',
'Premium vectors, photos, and PSD files',
'Freepik Premium gives unlimited access to millions of premium vectors, photos, PSD files, and icons. No attribution required.',
'Creativity', false);

-- Lovable Pro
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Lovable Pro', 'lovable-pro', 'https://cdn-icons-png.flaticon.com/512/1055/1055666.png',
'AI-powered app development',
'Lovable Pro helps you build full-stack applications with AI. Create web apps, mobile apps, and more without extensive coding.',
'AI', false);

-- Semrush
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Semrush', 'semrush', 'https://cdn-icons-png.flaticon.com/512/2504/2504739.png',
'Complete SEO and marketing toolkit',
'Semrush is an all-in-one marketing toolkit for SEO, content marketing, competitor research, PPC, and social media marketing.',
'Tools', false);

-- Ahrefs
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Ahrefs', 'ahrefs', 'https://cdn-icons-png.flaticon.com/512/2504/2504768.png',
'SEO tools and backlink analysis',
'Ahrefs provides powerful SEO tools including site explorer, keyword research, content explorer, and rank tracker.',
'Tools', false);

-- Google Drive Storage
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Google Drive Storage', 'google-drive-storage', 'https://cdn-icons-png.flaticon.com/512/5968/5968523.png',
'Cloud storage for all your files',
'Expand your Google Drive storage for photos, videos, documents, and more. Access your files from anywhere.',
'Tools', false);

-- Grammarly Premium
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Grammarly Premium', 'grammarly-premium', 'https://cdn-icons-png.flaticon.com/512/5968/5968494.png',
'Advanced writing assistant',
'Grammarly Premium offers advanced grammar checking, style suggestions, plagiarism detection, and tone adjustments.',
'Tools', false);

-- Quillbot
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Quillbot', 'quillbot', 'https://cdn-icons-png.flaticon.com/512/3131/3131622.png',
'AI paraphrasing and writing tool',
'Quillbot Premium offers advanced paraphrasing modes, grammar checker, summarizer, and citation generator.',
'Tools', false);

-- Surfshark VPN
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Surfshark VPN', 'surfshark-vpn', 'https://cdn-icons-png.flaticon.com/512/6295/6295417.png',
'Fast and secure VPN service',
'Surfshark VPN offers unlimited devices, fast servers worldwide, and advanced security features. Protect your privacy online.',
'VPN', false);

-- TradingView
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('TradingView', 'tradingview', 'https://cdn-icons-png.flaticon.com/512/2504/2504768.png',
'Advanced charting and trading platform',
'TradingView Premium offers advanced charts, indicators, alerts, and a social network for traders and investors.',
'Tools', false);

-- VidIQ
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('VidIQ', 'vidiq', 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
'YouTube growth and analytics tool',
'VidIQ helps YouTube creators grow their channels with keyword research, analytics, and optimization tools.',
'Social', false);

-- Coursera Plus
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Coursera Plus', 'coursera-plus', 'https://cdn-icons-png.flaticon.com/512/5968/5968523.png',
'Unlimited access to online courses',
'Coursera Plus gives unlimited access to 7,000+ courses, professional certificates, and guided projects from top universities.',
'Tools', false);

-- MS Office 365
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('MS Office 365', 'ms-office-365', 'https://cdn-icons-png.flaticon.com/512/732/732221.png',
'Complete Microsoft Office suite',
'Microsoft 365 includes Word, Excel, PowerPoint, Outlook, OneDrive, and more. Work from anywhere with cloud-based apps.',
'Tools', false);

-- LinkedIn Premium
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('LinkedIn Premium', 'linkedin-premium', 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png',
'Professional networking features',
'LinkedIn Premium offers InMail credits, profile views, learning courses, and advanced search filters for job seekers and professionals.',
'Social', false);

-- Wa Sender
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Wa Sender', 'wa-sender', 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
'WhatsApp bulk messaging tool',
'Wa Sender allows bulk messaging on WhatsApp for marketing campaigns. Send personalized messages to multiple contacts.',
'Social', false);

-- WhatsApp Virtual Numbers
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('WhatsApp Virtual Numbers', 'whatsapp-virtual-numbers', 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
'Virtual phone numbers for WhatsApp',
'Get virtual phone numbers for WhatsApp Business. Perfect for businesses needing multiple WhatsApp accounts.',
'Social', false);

-- Netflix
INSERT INTO products (title, slug, thumbnail_url, short_description, full_description, category, is_featured) VALUES
('Netflix', 'netflix', 'https://cdn-icons-png.flaticon.com/512/5977/5977590.png',
'Unlimited movies and TV shows',
'Netflix Premium offers unlimited streaming of movies, TV shows, and documentaries in 4K Ultra HD on multiple devices.',
'Streaming', true);

-- ============================================
-- Insert Plans for Each Product
-- ============================================

-- Canva Pro Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'canva-pro'), '1 Month', 1, 5, 1400, 420, '["Full Premium Access", "100M+ Premium Assets", "Brand Kit", "Background Remover", "Magic Resize"]', false),
((SELECT id FROM products WHERE slug = 'canva-pro'), '3 Months', 3, 12, 3400, 1000, '["Full Premium Access", "100M+ Premium Assets", "Brand Kit", "Background Remover", "Magic Resize", "Priority Support"]', true),
((SELECT id FROM products WHERE slug = 'canva-pro'), '1 Year', 12, 40, 11000, 3300, '["Full Premium Access", "100M+ Premium Assets", "Brand Kit", "Background Remover", "Magic Resize", "Priority Support", "Best Value"]', false);

-- CapCut Pro Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'capcut-pro'), '1 Month', 1, 4, 1100, 330, '["No Watermark", "4K Export", "Premium Effects", "Premium Transitions"]', false),
((SELECT id FROM products WHERE slug = 'capcut-pro'), '3 Months', 3, 10, 2800, 840, '["No Watermark", "4K Export", "Premium Effects", "Premium Transitions", "Priority Rendering"]', true),
((SELECT id FROM products WHERE slug = 'capcut-pro'), '1 Year', 12, 35, 9700, 2900, '["No Watermark", "4K Export", "Premium Effects", "Premium Transitions", "Priority Rendering", "Cloud Storage"]', false);

-- Adobe Creative Cloud Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'adobe-creative-cloud'), '1 Month', 1, 15, 4200, 1250, '["All Creative Apps", "100GB Cloud Storage", "Adobe Fonts", "Adobe Portfolio"]', false),
((SELECT id FROM products WHERE slug = 'adobe-creative-cloud'), '3 Months', 3, 40, 11000, 3300, '["All Creative Apps", "100GB Cloud Storage", "Adobe Fonts", "Adobe Portfolio", "Priority Support"]', true),
((SELECT id FROM products WHERE slug = 'adobe-creative-cloud'), '1 Year', 12, 140, 39000, 11700, '["All Creative Apps", "100GB Cloud Storage", "Adobe Fonts", "Adobe Portfolio", "Priority Support", "Best Value"]', false);

-- ChatGPT Plus Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'chatgpt-plus'), '1 Month', 1, 8, 2200, 670, '["GPT-4 Access", "Faster Responses", "Priority Access", "New Features First"]', false),
((SELECT id FROM products WHERE slug = 'chatgpt-plus'), '3 Months', 3, 22, 6100, 1830, '["GPT-4 Access", "Faster Responses", "Priority Access", "New Features First", "DALL-E Access"]', true),
((SELECT id FROM products WHERE slug = 'chatgpt-plus'), '1 Year', 12, 80, 22000, 6700, '["GPT-4 Access", "Faster Responses", "Priority Access", "New Features First", "DALL-E Access", "Best Value"]', false);

-- Claude AI Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'claude-ai'), '1 Month', 1, 8, 2200, 670, '["Claude 3 Opus Access", "Longer Conversations", "Priority Access"]', false),
((SELECT id FROM products WHERE slug = 'claude-ai'), '3 Months', 3, 22, 6100, 1830, '["Claude 3 Opus Access", "Longer Conversations", "Priority Access", "File Analysis"]', true),
((SELECT id FROM products WHERE slug = 'claude-ai'), '1 Year', 12, 80, 22000, 6700, '["Claude 3 Opus Access", "Longer Conversations", "Priority Access", "File Analysis", "Best Value"]', false);

-- Gemini Advanced Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'gemini-advanced'), '1 Month', 1, 8, 2200, 670, '["Gemini Ultra Access", "Google Workspace Integration", "Priority Access"]', false),
((SELECT id FROM products WHERE slug = 'gemini-advanced'), '3 Months', 3, 22, 6100, 1830, '["Gemini Ultra Access", "Google Workspace Integration", "Priority Access", "2TB Storage"]', true),
((SELECT id FROM products WHERE slug = 'gemini-advanced'), '1 Year', 12, 80, 22000, 6700, '["Gemini Ultra Access", "Google Workspace Integration", "Priority Access", "2TB Storage", "Best Value"]', false);

-- Grok Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'grok'), '1 Month', 1, 6, 1700, 500, '["Grok Access", "Real-time Information", "X Premium Features"]', false),
((SELECT id FROM products WHERE slug = 'grok'), '3 Months', 3, 16, 4400, 1330, '["Grok Access", "Real-time Information", "X Premium Features", "Priority Access"]', true),
((SELECT id FROM products WHERE slug = 'grok'), '1 Year', 12, 55, 15000, 4600, '["Grok Access", "Real-time Information", "X Premium Features", "Priority Access", "Best Value"]', false);

-- Perplexity AI Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'perplexity-ai'), '1 Month', 1, 8, 2200, 670, '["Unlimited Pro Searches", "GPT-4 & Claude Access", "File Upload"]', false),
((SELECT id FROM products WHERE slug = 'perplexity-ai'), '3 Months', 3, 22, 6100, 1830, '["Unlimited Pro Searches", "GPT-4 & Claude Access", "File Upload", "API Access"]', true),
((SELECT id FROM products WHERE slug = 'perplexity-ai'), '1 Year', 12, 80, 22000, 6700, '["Unlimited Pro Searches", "GPT-4 & Claude Access", "File Upload", "API Access", "Best Value"]', false);

-- ElevenLabs Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'elevenlabs'), '1 Month', 1, 10, 2800, 840, '["100K Characters/Month", "Voice Cloning", "29 Languages"]', false),
((SELECT id FROM products WHERE slug = 'elevenlabs'), '3 Months', 3, 27, 7500, 2250, '["100K Characters/Month", "Voice Cloning", "29 Languages", "Priority Support"]', true),
((SELECT id FROM products WHERE slug = 'elevenlabs'), '1 Year', 12, 95, 26000, 7900, '["100K Characters/Month", "Voice Cloning", "29 Languages", "Priority Support", "Best Value"]', false);

-- Netflix Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'netflix'), '1 Month', 1, 6, 1700, 500, '["4K Ultra HD", "4 Screens", "Downloads", "No Ads"]', false),
((SELECT id FROM products WHERE slug = 'netflix'), '3 Months', 3, 16, 4400, 1330, '["4K Ultra HD", "4 Screens", "Downloads", "No Ads", "Spatial Audio"]', true),
((SELECT id FROM products WHERE slug = 'netflix'), '1 Year', 12, 55, 15000, 4600, '["4K Ultra HD", "4 Screens", "Downloads", "No Ads", "Spatial Audio", "Best Value"]', false);

-- Veo 3 Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'veo-3'), '1 Month', 1, 15, 4200, 1250, '["HD Video Generation", "100 Videos/Month", "Commercial License"]', false),
((SELECT id FROM products WHERE slug = 'veo-3'), '3 Months', 3, 40, 11000, 3300, '["HD Video Generation", "300 Videos/Month", "Commercial License", "Priority Queue"]', true),
((SELECT id FROM products WHERE slug = 'veo-3'), '1 Year', 12, 140, 39000, 11700, '["4K Video Generation", "Unlimited Videos", "Commercial License", "Priority Queue", "API Access"]', false);

-- RunwayML Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'runwayml'), '1 Month', 1, 12, 3300, 1000, '["Gen-2 Access", "625 Credits", "4K Export"]', false),
((SELECT id FROM products WHERE slug = 'runwayml'), '3 Months', 3, 32, 8900, 2670, '["Gen-2 Access", "2000 Credits", "4K Export", "Priority Rendering"]', true),
((SELECT id FROM products WHERE slug = 'runwayml'), '1 Year', 12, 115, 32000, 9600, '["Gen-2 Access", "Unlimited Credits", "4K Export", "Priority Rendering", "API Access"]', false);

-- HeyGen AI Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'heygen-ai'), '1 Month', 1, 15, 4200, 1250, '["15 Credits/Month", "100+ Avatars", "1080p Export"]', false),
((SELECT id FROM products WHERE slug = 'heygen-ai'), '3 Months', 3, 40, 11000, 3300, '["50 Credits/Month", "100+ Avatars", "4K Export", "Custom Avatar"]', true),
((SELECT id FROM products WHERE slug = 'heygen-ai'), '1 Year', 12, 140, 39000, 11700, '["Unlimited Credits", "100+ Avatars", "4K Export", "Custom Avatar", "API Access"]', false);

-- Envato Elements Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'envato-elements'), '1 Month', 1, 8, 2200, 670, '["Unlimited Downloads", "12M+ Assets", "Commercial License"]', false),
((SELECT id FROM products WHERE slug = 'envato-elements'), '3 Months', 3, 22, 6100, 1830, '["Unlimited Downloads", "12M+ Assets", "Commercial License", "WordPress Themes"]', true),
((SELECT id FROM products WHERE slug = 'envato-elements'), '1 Year', 12, 80, 22000, 6700, '["Unlimited Downloads", "12M+ Assets", "Commercial License", "WordPress Themes", "Best Value"]', false);

-- Freepik Premium Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'freepik-premium'), '1 Month', 1, 5, 1400, 420, '["Unlimited Downloads", "No Attribution", "Premium Content"]', false),
((SELECT id FROM products WHERE slug = 'freepik-premium'), '3 Months', 3, 13, 3600, 1080, '["Unlimited Downloads", "No Attribution", "Premium Content", "AI Tools"]', true),
((SELECT id FROM products WHERE slug = 'freepik-premium'), '1 Year', 12, 45, 12500, 3750, '["Unlimited Downloads", "No Attribution", "Premium Content", "AI Tools", "Best Value"]', false);

-- Lovable Pro Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'lovable-pro'), '1 Month', 1, 20, 5500, 1670, '["Unlimited Projects", "AI Code Generation", "Deployment"]', false),
((SELECT id FROM products WHERE slug = 'lovable-pro'), '3 Months', 3, 55, 15000, 4600, '["Unlimited Projects", "AI Code Generation", "Deployment", "Custom Domains"]', true),
((SELECT id FROM products WHERE slug = 'lovable-pro'), '1 Year', 12, 200, 55000, 16700, '["Unlimited Projects", "AI Code Generation", "Deployment", "Custom Domains", "Priority Support"]', false);

-- Semrush Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'semrush'), '1 Month', 1, 25, 6900, 2080, '["SEO Toolkit", "10K Keywords", "Competitor Analysis"]', false),
((SELECT id FROM products WHERE slug = 'semrush'), '3 Months', 3, 70, 19000, 5830, '["SEO Toolkit", "30K Keywords", "Competitor Analysis", "Content Marketing"]', true),
((SELECT id FROM products WHERE slug = 'semrush'), '1 Year', 12, 250, 69000, 20800, '["SEO Toolkit", "Unlimited Keywords", "Competitor Analysis", "Content Marketing", "API Access"]', false);

-- Ahrefs Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'ahrefs'), '1 Month', 1, 25, 6900, 2080, '["Site Explorer", "Keywords Explorer", "Site Audit"]', false),
((SELECT id FROM products WHERE slug = 'ahrefs'), '3 Months', 3, 70, 19000, 5830, '["Site Explorer", "Keywords Explorer", "Site Audit", "Rank Tracker"]', true),
((SELECT id FROM products WHERE slug = 'ahrefs'), '1 Year', 12, 250, 69000, 20800, '["Site Explorer", "Keywords Explorer", "Site Audit", "Rank Tracker", "Content Explorer"]', false);

-- Google Drive Storage Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'google-drive-storage'), '1 Month', 1, 3, 830, 250, '["100GB Storage", "Google Photos", "Family Sharing"]', false),
((SELECT id FROM products WHERE slug = 'google-drive-storage'), '3 Months', 3, 8, 2200, 670, '["200GB Storage", "Google Photos", "Family Sharing", "VPN"]', true),
((SELECT id FROM products WHERE slug = 'google-drive-storage'), '1 Year', 12, 30, 8300, 2500, '["2TB Storage", "Google Photos", "Family Sharing", "VPN", "Best Value"]', false);

-- Grammarly Premium Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'grammarly-premium'), '1 Month', 1, 8, 2200, 670, '["Advanced Grammar", "Clarity Suggestions", "Tone Detection"]', false),
((SELECT id FROM products WHERE slug = 'grammarly-premium'), '3 Months', 3, 22, 6100, 1830, '["Advanced Grammar", "Clarity Suggestions", "Tone Detection", "Plagiarism Checker"]', true),
((SELECT id FROM products WHERE slug = 'grammarly-premium'), '1 Year', 12, 80, 22000, 6700, '["Advanced Grammar", "Clarity Suggestions", "Tone Detection", "Plagiarism Checker", "Best Value"]', false);

-- Quillbot Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'quillbot'), '1 Month', 1, 5, 1400, 420, '["Unlimited Paraphrasing", "All Modes", "Summarizer"]', false),
((SELECT id FROM products WHERE slug = 'quillbot'), '3 Months', 3, 13, 3600, 1080, '["Unlimited Paraphrasing", "All Modes", "Summarizer", "Citation Generator"]', true),
((SELECT id FROM products WHERE slug = 'quillbot'), '1 Year', 12, 45, 12500, 3750, '["Unlimited Paraphrasing", "All Modes", "Summarizer", "Citation Generator", "Best Value"]', false);

-- Surfshark VPN Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'surfshark-vpn'), '1 Month', 1, 4, 1100, 330, '["Unlimited Devices", "3200+ Servers", "No Logs"]', false),
((SELECT id FROM products WHERE slug = 'surfshark-vpn'), '3 Months', 3, 10, 2800, 840, '["Unlimited Devices", "3200+ Servers", "No Logs", "CleanWeb"]', true),
((SELECT id FROM products WHERE slug = 'surfshark-vpn'), '1 Year', 12, 35, 9700, 2900, '["Unlimited Devices", "3200+ Servers", "No Logs", "CleanWeb", "Best Value"]', false);

-- TradingView Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'tradingview'), '1 Month', 1, 15, 4200, 1250, '["Advanced Charts", "10 Indicators", "Price Alerts"]', false),
((SELECT id FROM products WHERE slug = 'tradingview'), '3 Months', 3, 40, 11000, 3300, '["Advanced Charts", "25 Indicators", "Price Alerts", "Multiple Watchlists"]', true),
((SELECT id FROM products WHERE slug = 'tradingview'), '1 Year', 12, 140, 39000, 11700, '["Advanced Charts", "Unlimited Indicators", "Price Alerts", "Multiple Watchlists", "Priority Support"]', false);

-- VidIQ Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'vidiq'), '1 Month', 1, 6, 1700, 500, '["Keyword Research", "Competitor Tracking", "SEO Score"]', false),
((SELECT id FROM products WHERE slug = 'vidiq'), '3 Months', 3, 16, 4400, 1330, '["Keyword Research", "Competitor Tracking", "SEO Score", "Trend Alerts"]', true),
((SELECT id FROM products WHERE slug = 'vidiq'), '1 Year', 12, 55, 15000, 4600, '["Keyword Research", "Competitor Tracking", "SEO Score", "Trend Alerts", "Best Value"]', false);

-- Coursera Plus Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'coursera-plus'), '1 Month', 1, 15, 4200, 1250, '["7000+ Courses", "Certificates", "Guided Projects"]', false),
((SELECT id FROM products WHERE slug = 'coursera-plus'), '3 Months', 3, 40, 11000, 3300, '["7000+ Courses", "Certificates", "Guided Projects", "Professional Certificates"]', true),
((SELECT id FROM products WHERE slug = 'coursera-plus'), '1 Year', 12, 140, 39000, 11700, '["7000+ Courses", "Certificates", "Guided Projects", "Professional Certificates", "Best Value"]', false);

-- MS Office 365 Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'ms-office-365'), '1 Month', 1, 5, 1400, 420, '["Word, Excel, PowerPoint", "1TB OneDrive", "Outlook"]', false),
((SELECT id FROM products WHERE slug = 'ms-office-365'), '3 Months', 3, 13, 3600, 1080, '["Word, Excel, PowerPoint", "1TB OneDrive", "Outlook", "Teams"]', true),
((SELECT id FROM products WHERE slug = 'ms-office-365'), '1 Year', 12, 45, 12500, 3750, '["Word, Excel, PowerPoint", "1TB OneDrive", "Outlook", "Teams", "Best Value"]', false);

-- LinkedIn Premium Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'linkedin-premium'), '1 Month', 1, 10, 2800, 840, '["InMail Credits", "Profile Views", "Learning Courses"]', false),
((SELECT id FROM products WHERE slug = 'linkedin-premium'), '3 Months', 3, 27, 7500, 2250, '["InMail Credits", "Profile Views", "Learning Courses", "Salary Insights"]', true),
((SELECT id FROM products WHERE slug = 'linkedin-premium'), '1 Year', 12, 95, 26000, 7900, '["InMail Credits", "Profile Views", "Learning Courses", "Salary Insights", "Best Value"]', false);

-- Wa Sender Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'wa-sender'), '1 Month', 1, 8, 2200, 670, '["Bulk Messaging", "Contact Import", "Scheduling"]', false),
((SELECT id FROM products WHERE slug = 'wa-sender'), '3 Months', 3, 22, 6100, 1830, '["Bulk Messaging", "Contact Import", "Scheduling", "Analytics"]', true),
((SELECT id FROM products WHERE slug = 'wa-sender'), '1 Year', 12, 80, 22000, 6700, '["Bulk Messaging", "Contact Import", "Scheduling", "Analytics", "API Access"]', false);

-- WhatsApp Virtual Numbers Plans
INSERT INTO plans (product_id, name, duration_months, price_usd, price_pkr, price_inr, features, is_popular) VALUES
((SELECT id FROM products WHERE slug = 'whatsapp-virtual-numbers'), '1 Month', 1, 5, 1400, 420, '["1 Virtual Number", "WhatsApp Business", "SMS Verification"]', false),
((SELECT id FROM products WHERE slug = 'whatsapp-virtual-numbers'), '3 Months', 3, 13, 3600, 1080, '["1 Virtual Number", "WhatsApp Business", "SMS Verification", "Multiple Countries"]', true),
((SELECT id FROM products WHERE slug = 'whatsapp-virtual-numbers'), '1 Year', 12, 45, 12500, 3750, '["1 Virtual Number", "WhatsApp Business", "SMS Verification", "Multiple Countries", "Best Value"]', false);

-- ============================================
-- Insert FAQs for Products
-- ============================================

-- Generic FAQs for all products
INSERT INTO faqs (product_id, question, answer, sort_order)
SELECT id, 'How do I receive my subscription?', 'After your order is confirmed via WhatsApp, you will receive login credentials or an invitation link within 24 hours. Most orders are delivered within 1-2 hours during business hours.', 1
FROM products;

INSERT INTO faqs (product_id, question, answer, sort_order)
SELECT id, 'Is this a shared or personal account?', 'We offer both shared and personal account options. Shared accounts are more affordable while personal accounts give you full control. Please specify your preference when ordering.', 2
FROM products;

INSERT INTO faqs (product_id, question, answer, sort_order)
SELECT id, 'What payment methods do you accept?', 'We accept various payment methods including bank transfer, JazzCash, EasyPaisa, and cryptocurrency. Payment details will be provided via WhatsApp.', 3
FROM products;

INSERT INTO faqs (product_id, question, answer, sort_order)
SELECT id, 'What if I face any issues with my subscription?', 'We provide 24/7 support via WhatsApp. If you face any issues, simply message us and we will resolve it promptly. We also offer replacements if needed.', 4
FROM products;

INSERT INTO faqs (product_id, question, answer, sort_order)
SELECT id, 'Can I upgrade my plan later?', 'Yes, you can upgrade your plan at any time. Contact us via WhatsApp and we will help you upgrade. You will only pay the difference in price.', 5
FROM products;

-- ============================================
-- Insert Site Settings
-- ============================================
INSERT INTO site_settings (key, value, description) VALUES
('whatsapp_number', '"9303704731692"', 'WhatsApp number for orders'),
('site_name', '"CartCloudy"', 'Website name'),
('site_tagline', '"Premium Digital Subscriptions"', 'Website tagline'),
('support_email', '"support@cartcloudy.com"', 'Support email address'),
('currency_rates', '{"USD": 1, "PKR": 278, "INR": 83}', 'Currency exchange rates')
ON CONFLICT (key) DO NOTHING;
