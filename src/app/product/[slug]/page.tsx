"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  Check,
  Star,
  ShoppingCart,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { useCurrency, useCart, getPriceByKey } from "@/context/CartContext";
import { ProductCardCompact } from "@/components/ProductCard";
import { products } from "@/data/seedData";
import { Product, Plan, FAQ } from "@/types";

// Transform seed data
const transformedProducts = products.map((p, index) => ({
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
  faqs: p.faqs.map((faq, faqIndex) => ({
    ...faq,
    id: `faq-${index + 1}-${faqIndex + 1}`,
    product_id: `product-${index + 1}`,
    created_at: new Date().toISOString(),
  })),
}));

// ============================================
// FAQ Accordion Component
// ============================================
const FAQAccordion: React.FC<{
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ faq, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={false}
      className="border-b border-white/[0.08] last:border-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="text-base font-medium text-white group-hover:text-white/90 transition-colors pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-white/60 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ============================================
// Plan Card Component
// ============================================
const PlanCard: React.FC<{
  plan: Plan;
  isSelected: boolean;
  onSelect: () => void;
  currency: string;
  formatPrice: (price: number) => string;
}> = ({ plan, isSelected, onSelect, currency, formatPrice }) => {
  const price = getPriceByKey(plan, currency as "USD" | "PKR" | "INR");

  return (
    <motion.button
      onClick={onSelect}
      whileTap={{ scale: 0.98 }}
      className={`relative w-full p-5 rounded-3xl border-2 transition-all duration-300 text-left ${
        isSelected
          ? "border-indigo-500 bg-indigo-500/10 shadow-[0_0_40px_rgba(99,102,241,0.3)]"
          : "border-white/[0.08] bg-white/[0.03] hover:border-white/[0.15] hover:bg-white/[0.05]"
      }`}
    >
      {/* Popular Badge */}
      {plan.is_popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center gap-1">
            <Star className="w-3 h-3" fill="currentColor" />
            Popular
          </span>
        </div>
      )}

      {/* Selection Indicator */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="text-lg font-bold text-white">{plan.name}</h4>
          <p className="text-xs text-white/50 mt-0.5">
            {plan.duration_months}{" "}
            {plan.duration_months === 1 ? "Month" : "Months"}
          </p>
        </div>
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
            isSelected
              ? "border-indigo-500 bg-indigo-500"
              : "border-white/20 bg-transparent"
          }`}
        >
          {isSelected && <Check className="w-4 h-4 text-white" />}
        </div>
      </div>

      {/* Price */}
      <div className="mb-4">
        <span className="text-2xl font-bold text-white">
          {formatPrice(price)}
        </span>
        {plan.duration_months > 1 && (
          <span className="text-sm text-white/40 ml-2">
            ({formatPrice(price / plan.duration_months)}/mo)
          </span>
        )}
      </div>

      {/* Features */}
      {plan.features && plan.features.length > 0 && (
        <ul className="space-y-2">
          {plan.features.slice(0, 4).map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-sm text-white/70"
            >
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.button>
  );
};

// ============================================
// Product Page Component
// ============================================
export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { currency, formatPrice } = useCurrency();
  const { addToCart } = useCart();

  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  // Find product by slug
  const product = useMemo(() => {
    return transformedProducts.find((p) => p.slug === slug);
  }, [slug]);

  // Get related products (same category)
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return transformedProducts
      .filter((p) => p.category === product.category && p.slug !== product.slug)
      .slice(0, 6);
  }, [product]);

  // Set default selected plan
  useEffect(() => {
    if (product?.plans && product.plans.length > 0) {
      const popularPlan = product.plans.find((p) => p.is_popular);
      setSelectedPlan(popularPlan || product.plans[0]);
    }
  }, [product]);

  // Handle Add to Cart
  const handleAddToCart = async () => {
    if (!selectedPlan || !product) return;

    setIsAddingToCart(true);
    await new Promise((resolve) => setTimeout(resolve, 300));

    addToCart({
      productId: product.id,
      productName: product.title,
      productSlug: product.slug,
      productThumbnail: product.thumbnail_url,
      planId: selectedPlan.id,
      planName: selectedPlan.name,
      price: getPriceByKey(selectedPlan, currency),
      currency,
    });

    setIsAddingToCart(false);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Product Not Found
          </h1>
          <Link
            href="/"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Go back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pb-32">
        {/* Back Navigation */}
        <div className="sticky top-16 md:top-20 z-20 glass-heavy">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back to Shop</span>
            </Link>
          </div>
        </div>

        {/* Product Header */}
        <section className="max-w-4xl mx-auto px-4 pt-6 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-6"
          >
            {/* Product Icon/Thumbnail */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-[32px] blur-2xl" />
              <div className="relative w-full h-full rounded-[32px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.1] p-4 overflow-hidden">
                <Image
                  src={product.thumbnail_url || "/placeholder.png"}
                  alt={product.title}
                  fill
                  className="object-contain p-2"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="text-center md:text-left">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/[0.08] text-white/60 mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {product.title}
              </h1>
              <p className="text-base text-white/60 max-w-lg">
                {product.short_description}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Plan Selector Section */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              Choose Your Plan
            </h2>

            {/* Plans Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.plans?.map((plan) => (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                  isSelected={selectedPlan?.id === plan.id}
                  onSelect={() => setSelectedPlan(plan)}
                  currency={currency}
                  formatPrice={formatPrice}
                />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Detailed Description */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 md:p-8"
          >
            <h2 className="text-xl font-bold text-white mb-4">
              About This Product
            </h2>
            <p className="text-white/70 leading-relaxed">
              {product.full_description || product.short_description}
            </p>
          </motion.div>
        </section>

        {/* FAQ Section */}
        {product.faqs && product.faqs.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-6 md:p-8"
            >
              <h2 className="text-xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <div className="divide-y divide-white/[0.08]">
                {product.faqs.map((faq) => (
                  <FAQAccordion
                    key={faq.id}
                    faq={faq}
                    isOpen={openFAQ === faq.id}
                    onToggle={() =>
                      setOpenFAQ(openFAQ === faq.id ? null : faq.id)
                    }
                  />
                ))}
              </div>
            </motion.div>
          </section>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-xl font-bold text-white mb-6">
                You May Also Like
              </h2>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x-mandatory">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCardCompact
                    key={relatedProduct.id}
                    product={relatedProduct}
                  />
                ))}
              </div>
            </motion.div>
          </section>
        )}
      </div>

      {/* Sticky Add to Cart Button */}
      <div className="fixed bottom-0 left-0 right-0 z-30 glass-heavy border-t border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Selected Plan Info */}
            <div className="flex-1 min-w-0">
              {selectedPlan && (
                <div>
                  <p className="text-sm text-white/60 truncate">
                    {product.title} • {selectedPlan.name}
                  </p>
                  <p className="text-xl font-bold text-white">
                    {formatPrice(getPriceByKey(selectedPlan, currency))}
                  </p>
                </div>
              )}
            </div>

            {/* Add to Cart Button */}
            <motion.button
              onClick={handleAddToCart}
              disabled={!selectedPlan || isAddingToCart}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 ${
                selectedPlan && !isAddingToCart
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)]"
                  : "bg-white/10 cursor-not-allowed"
              }`}
            >
              {isAddingToCart ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <ShoppingCart className="w-5 h-5" />
              )}
              <span>Add to Cart</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
