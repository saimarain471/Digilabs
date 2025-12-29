"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Filter, X } from "lucide-react";
import { ProductCard, ProductCardSkeleton } from "@/components";
import { products as seedProducts, categories } from "@/data/seedData";
import { Product, Plan } from "@/types";

// Transform seed data to match Product type
const transformedProducts: (Product & { plans: Plan[] })[] = seedProducts.map(
  (p, index) => ({
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
  })
);

// ============================================
// Tools Page Component
// ============================================
export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading] = useState(false);

  // Filter products
  const filteredProducts = useMemo(() => {
    return transformedProducts.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.short_description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Digital Tools & Accounts
            </h1>
            <p className="text-white/60">
              Premium streaming, gaming, and productivity accounts at unbeatable prices
            </p>
          </motion.div>

          {/* Filters Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 space-y-4"
          >
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search tools and accounts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder:text-white/40 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === "All"
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "bg-white/[0.05] text-white/70 hover:bg-white/[0.08] border border-white/[0.08]"
                }`}
              >
                All Tools
              </button>
              {categories.map((category) => {
                // Count products in each category
                const productCount = transformedProducts.filter(
                  p => p.category === category.name
                ).length;
                
                return (
                  <button
                    key={category.slug}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                      selectedCategory === category.name
                        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                        : "bg-white/[0.05] text-white/70 hover:bg-white/[0.08] border border-white/[0.08]"
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                    <span className="text-xs bg-white/[0.1] px-2 py-0.5 rounded-full">
                      {productCount}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-white/50">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
            {(searchQuery || selectedCategory !== "All") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                Clear filters
              </button>
            )}
          </div>

          {/* Products Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(12)].map((_, i) => (
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
              <div className="w-20 h-20 rounded-full bg-white/[0.05] flex items-center justify-center mx-auto mb-4">
                <Filter className="w-10 h-10 text-white/30" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                No products found
              </h3>
              <p className="text-white/50 mb-4">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-6 py-2 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}