// ============================================
// CartCloudy - Supabase Client Configuration
// ============================================

import { createClient } from "@supabase/supabase-js";

// Environment variables for Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase credentials not found. Running in demo mode with local data."
  );
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

// ============================================
// Database Types (Generated from Schema)
// ============================================
export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          role: "admin" | "customer";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: "admin" | "customer";
        };
        Update: {
          full_name?: string | null;
          avatar_url?: string | null;
          role?: "admin" | "customer";
        };
      };
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          icon: string | null;
          description: string | null;
          created_at: string;
        };
        Insert: {
          name: string;
          slug: string;
          icon?: string | null;
          description?: string | null;
        };
        Update: {
          name?: string;
          slug?: string;
          icon?: string | null;
          description?: string | null;
        };
      };
      products: {
        Row: {
          id: string;
          title: string;
          slug: string;
          thumbnail_url: string | null;
          short_description: string | null;
          full_description: string | null;
          category_id: string | null;
          category: string;
          is_featured: boolean;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          title: string;
          slug: string;
          thumbnail_url?: string | null;
          short_description?: string | null;
          full_description?: string | null;
          category_id?: string | null;
          category: string;
          is_featured?: boolean;
          is_active?: boolean;
        };
        Update: {
          title?: string;
          slug?: string;
          thumbnail_url?: string | null;
          short_description?: string | null;
          full_description?: string | null;
          category_id?: string | null;
          category?: string;
          is_featured?: boolean;
          is_active?: boolean;
        };
      };
      plans: {
        Row: {
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
        };
        Insert: {
          product_id: string;
          name: string;
          duration_months?: number;
          price_usd: number;
          price_pkr: number;
          price_inr: number;
          features?: string[];
          is_popular?: boolean;
          is_active?: boolean;
          sort_order?: number;
        };
        Update: {
          name?: string;
          duration_months?: number;
          price_usd?: number;
          price_pkr?: number;
          price_inr?: number;
          features?: string[];
          is_popular?: boolean;
          is_active?: boolean;
          sort_order?: number;
        };
      };
      faqs: {
        Row: {
          id: string;
          product_id: string;
          question: string;
          answer: string;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          product_id: string;
          question: string;
          answer: string;
          sort_order?: number;
        };
        Update: {
          question?: string;
          answer?: string;
          sort_order?: number;
        };
      };
      orders: {
        Row: {
          id: string;
          user_id: string | null;
          order_number: string;
          status: "pending" | "processing" | "completed" | "cancelled";
          total_amount: number;
          currency_used: "USD" | "PKR" | "INR";
          items_json: object;
          customer_email: string | null;
          customer_name: string | null;
          whatsapp_sent: boolean;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id?: string | null;
          status?: "pending" | "processing" | "completed" | "cancelled";
          total_amount: number;
          currency_used: "USD" | "PKR" | "INR";
          items_json: object;
          customer_email?: string | null;
          customer_name?: string | null;
          whatsapp_sent?: boolean;
          notes?: string | null;
        };
        Update: {
          status?: "pending" | "processing" | "completed" | "cancelled";
          total_amount?: number;
          currency_used?: "USD" | "PKR" | "INR";
          items_json?: object;
          customer_email?: string | null;
          customer_name?: string | null;
          whatsapp_sent?: boolean;
          notes?: string | null;
        };
      };
    };
  };
};

// ============================================
// Helper Functions
// ============================================

// Get current user
export const getCurrentUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
};

// Get user profile
export const getUserProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw error;
  return data;
};

// Sign in with Google
export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  if (error) throw error;
  return data;
};

// Sign out
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

// ============================================
// Product Functions
// ============================================

// Get all products
export const getProducts = async () => {
  const { data, error } = await supabase
    .from("products")
    .select(
      `
      *,
      plans (*)
    `
    )
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

// Get product by slug
export const getProductBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from("products")
    .select(
      `
      *,
      plans (*),
      faqs (*)
    `
    )
    .eq("slug", slug)
    .eq("is_active", true)
    .single();

  if (error) throw error;
  return data;
};

// Get featured products
export const getFeaturedProducts = async () => {
  const { data, error } = await supabase
    .from("products")
    .select(
      `
      *,
      plans (*)
    `
    )
    .eq("is_featured", true)
    .eq("is_active", true)
    .limit(6);

  if (error) throw error;
  return data;
};

// Get products by category
export const getProductsByCategory = async (category: string) => {
  const { data, error } = await supabase
    .from("products")
    .select(
      `
      *,
      plans (*)
    `
    )
    .eq("category", category)
    .eq("is_active", true);

  if (error) throw error;
  return data;
};

// Get all categories
export const getCategories = async () => {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  if (error) throw error;
  return data;
};
