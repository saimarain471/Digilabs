// ============================================
// CartCloudy - Type Definitions
// ============================================

export type Currency = "USD" | "PKR" | "INR";

export type UserRole = "admin" | "customer";

export type OrderStatus = "pending" | "processing" | "completed" | "cancelled";

// ============================================
// User Types
// ============================================
export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

// ============================================
// Category Types
// ============================================
export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
  description?: string;
  created_at: string;
}

// ============================================
// Product Types
// ============================================
export interface Product {
  id: string;
  title: string;
  slug: string;
  thumbnail_url: string;
  short_description: string;
  full_description?: string;
  category_id?: string;
  category: string;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  plans?: Plan[];
  faqs?: FAQ[];
}

// ============================================
// Plan Types
// ============================================
export interface Plan {
  id: string;
  product_id: string;
  name: string;
  duration_months: number;
  price_usd: number;
  price_pkr: number;
  price_inr: number;
  features: string[];
  is_popular: boolean;
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

// ============================================
// FAQ Types
// ============================================
export interface FAQ {
  id: string;
  product_id: string;
  question: string;
  answer: string;
  sort_order: number;
  created_at: string;
}

// ============================================
// Cart Types
// ============================================
export interface CartItem {
  id: string;
  productId: string;
  productName: string;
  productSlug: string;
  productThumbnail: string;
  planId: string;
  planName: string;
  price: number;
  currency: Currency;
  quantity: number;
}

// ============================================
// Order Types
// ============================================
export interface Order {
  id: string;
  user_id?: string;
  order_number: string;
  status: OrderStatus;
  total_amount: number;
  currency_used: Currency;
  items_json: CartItem[];
  customer_email?: string;
  customer_name?: string;
  whatsapp_sent: boolean;
  notes?: string;
  created_at: string;
  updated_at: string;
}

// ============================================
// Currency Info
// ============================================
export interface CurrencyInfo {
  code: Currency;
  symbol: string;
  flag: string;
  name: string;
}

export const CURRENCIES: CurrencyInfo[] = [
  { code: "USD", symbol: "$", flag: "🌎", name: "US Dollar" },
  { code: "PKR", symbol: "Rs", flag: "🇵🇰", name: "Pakistani Rupee" },
  { code: "INR", symbol: "₹", flag: "🇮🇳", name: "Indian Rupee" },
];

// ============================================
// WhatsApp Config
// ============================================
export const WHATSAPP_CONFIG = {
  phone: "+9303704731692",
  baseUrl: "https://wa.me/",
};
