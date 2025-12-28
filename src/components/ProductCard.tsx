"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCurrency, getLowestPrice } from "@/context/CartContext";
import { Product, Plan } from "@/types";

// ============================================
// Types
// ============================================
interface ProductCardProps {
  product: Product & { plans?: Plan[] };
  index?: number;
}

// ============================================
// ProductCard Component
// ============================================
export const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  const { currency, formatPrice } = useCurrency();
  const lowestPrice = product.plans ? getLowestPrice(product.plans, currency) : 0;

  // Animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="group relative w-full snap-center"
    >
      <Link href={`/product/${product.slug}`}>
        {/* Card Container - Vertical Pill Shape */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] transition-all duration-300 group-hover:border-white/[0.15] group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.1)]">
          
          {/* Featured Badge */}
          {product.is_featured && (
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-[0_0_40px_rgba(99,102,241,0.3)]">
                Featured
              </span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.1] text-white/70 backdrop-blur-sm border border-white/[0.1]">
              {product.category}
            </span>
          </div>

          {/* Thumbnail Container */}
          <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-white/[0.03] to-transparent">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent z-[1]" />
            
            {/* Product Image */}
            <div className="relative w-full h-full p-8 flex items-center justify-center">
              <div className="relative w-3/4 h-3/4 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={product.thumbnail_url || "/placeholder.png"}
                  alt={product.title}
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
              </div>
            </div>

            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.2),transparent_70%)]" />
          </div>

          {/* Content Section */}
          <div className="p-6 pt-4 space-y-4">
            {/* Product Name */}
            <h3 className="text-xl font-bold text-white tracking-tight line-clamp-1 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-violet-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {product.title}
            </h3>

            {/* Short Description */}
            <p className="text-sm text-white/60 line-clamp-2 leading-relaxed">
              {product.short_description}
            </p>

            {/* Price Display */}
            {lowestPrice > 0 && (
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-white/40 uppercase tracking-wider">From</span>
                <span className="text-lg font-bold text-white">
                  {formatPrice(lowestPrice)}
                </span>
              </div>
            )}

            {/* CTA Button */}
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:from-indigo-400 hover:via-purple-400 hover:to-violet-400 active:scale-[0.98]"
            >
              View Plans & Details
            </motion.button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </Link>
    </motion.div>
  );
};

// ============================================
// ProductCardSkeleton - Loading State
// ============================================
export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] animate-pulse">
      {/* Thumbnail Skeleton */}
      <div className="aspect-square w-full bg-white/[0.05]" />
      
      {/* Content Skeleton */}
      <div className="p-6 pt-4 space-y-4">
        <div className="h-6 bg-white/[0.08] rounded-lg w-3/4" />
        <div className="space-y-2">
          <div className="h-4 bg-white/[0.05] rounded-lg w-full" />
          <div className="h-4 bg-white/[0.05] rounded-lg w-2/3" />
        </div>
        <div className="h-5 bg-white/[0.08] rounded-lg w-1/3" />
        <div className="h-12 bg-white/[0.08] rounded-2xl w-full" />
      </div>
    </div>
  );
};

// ============================================
// ProductCardCompact - For Related Products
// ============================================
export const ProductCardCompact: React.FC<ProductCardProps> = ({ product }) => {
  const { currency, formatPrice } = useCurrency();
  const lowestPrice = product.plans ? getLowestPrice(product.plans, currency) : 0;

  return (
    <Link href={`/product/${product.slug}`}>
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        className="flex-shrink-0 w-40 snap-center"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] transition-all duration-300 hover:border-white/[0.15]">
          {/* Thumbnail */}
          <div className="relative aspect-square w-full p-4 bg-gradient-to-br from-white/[0.03] to-transparent">
            <Image
              src={product.thumbnail_url || "/placeholder.png"}
              alt={product.title}
              fill
              className="object-contain p-4"
              sizes="160px"
              unoptimized
            />
          </div>
          
          {/* Content */}
          <div className="p-3 space-y-1">
            <h4 className="text-sm font-semibold text-white line-clamp-1">
              {product.title}
            </h4>
            {lowestPrice > 0 && (
              <p className="text-xs text-white/50">
                From {formatPrice(lowestPrice)}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
