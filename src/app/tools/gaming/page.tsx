"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Gamepad2, Trophy } from "lucide-react";
import { ProductCard, ProductCardSkeleton } from "@/components";
import { products as seedProducts } from "@/data/seedData";
import { Product, Plan } from "@/types";

// Transform seed data for gaming category
const transformedProducts: (Product & { plans: Plan[] })[] = seedProducts
  .filter(p => 
    p.category === "Gaming" || 
    p.title.toLowerCase().includes('steam') ||
    p.title.toLowerCase().includes('game') ||
    p.title.toLowerCase().includes('playstation') ||
    p.title.toLowerCase().includes('xbox')
  )
  .map((p, index) => ({
    id: `product-${index + 1}`,
    title: p.title,
    slug: p.slug,
    thumbnail_url: p.thumbnail_url,
    short_description: p.short_description,
    full_description: p.full_description,
    category: p.category,
    is_featured: p.is_featured,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    plans: p.plans.map((plan, planIndex) => ({
      ...plan,
      id: `plan-${index + 1}-${planIndex + 1}`,
      product_id: `product-${index + 1}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })),
  }));

export default function GamingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading] = useState(false);

  const filteredProducts = useMemo(() => {
    return transformedProducts.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.short_description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Hero Section for Gaming */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <Gamepad2 className="w-10 h-10 text-purple-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Gaming Accounts
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Access premium gaming accounts with pre-loaded games, progress, and exclusive content 
              from Steam, Xbox Game Pass, PlayStation Plus, and more.
            </p>
            
            {/* Key Features */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08]">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-white/70">Pre-Loaded Games</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08]">
                <Gamepad2 className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-white/70">Exclusive Content</span>
              </div>
            </div>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search gaming accounts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
            </div>
          </motion.div>

          {/* Results Count */}
          <div className="flex items-center justify-center mb-6">
            <p className="text-sm text-white/50">
              {filteredProducts.length} gaming accounts available
            </p>
          </div>

          {/* Products Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-lg font-semibold text-white mb-2">
                No gaming accounts found
              </h3>
              <p className="text-white/50">
                Try adjusting your search criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}