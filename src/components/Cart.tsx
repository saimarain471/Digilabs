"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { useCart, useCurrency } from "@/context/CartContext";

// ============================================
// Cart Item Component
// ============================================
const CartItemCard: React.FC<{
  item: {
    id: string;
    productName: string;
    productSlug: string;
    productThumbnail: string;
    planName: string;
    price: number;
    quantity: number;
  };
}> = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();
  const { formatPrice } = useCurrency();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]"
    >
      {/* Product Image */}
      <Link
        href={`/product/${item.productSlug}`}
        className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white/[0.05]"
      >
        <Image
          src={item.productThumbnail || "/placeholder.png"}
          alt={item.productName}
          fill
          className="object-contain p-2"
          unoptimized
        />
      </Link>

      {/* Item Details */}
      <div className="flex-1 min-w-0">
        <Link href={`/product/${item.productSlug}`}>
          <h4 className="text-sm font-semibold text-white truncate hover:text-indigo-400 transition-colors">
            {item.productName}
          </h4>
        </Link>
        <p className="text-xs text-white/50 mt-0.5">{item.planName}</p>
        <p className="text-sm font-bold text-white mt-1">
          {formatPrice(item.price)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => removeFromCart(item.id)}
          className="p-1.5 rounded-lg text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-all"
        >
          <Trash2 className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-7 h-7 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center transition-all"
          >
            <Minus className="w-3 h-3 text-white" />
          </button>
          <span className="text-sm font-medium text-white w-5 text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-7 h-7 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center transition-all"
          >
            <Plus className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// ============================================
// Empty Cart Component
// ============================================
const EmptyCart: React.FC = () => {
  const { closeCart } = useCart();

  return (
    <div className="flex flex-col items-center justify-center h-full py-12 px-4 text-center">
      <div className="w-20 h-20 rounded-full bg-white/[0.05] flex items-center justify-center mb-4">
        <ShoppingBag className="w-10 h-10 text-white/30" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">Your cart is empty</h3>
      <p className="text-sm text-white/50 mb-6 max-w-[200px]">
        Explore our products and find something you love!
      </p>
      <Link
        href="/shop"
        onClick={closeCart}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
      >
        Browse Products
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

// ============================================
// Cart Sidebar Component
// ============================================
export const Cart: React.FC = () => {
  const { items, isOpen, closeCart, getTotal, clearCart, getWhatsAppUrl } = useCart();
  const { formatPrice, currency } = useCurrency();
  const total = getTotal();

  const handleCheckout = () => {
    const whatsappUrl = getWhatsAppUrl();
    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[#0a0a0a] border-l border-white/[0.08] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Your Cart</h2>
                  <p className="text-xs text-white/50">
                    {items.length} {items.length === 1 ? "item" : "items"}
                  </p>
                </div>
              </div>
              <button
                onClick={closeCart}
                className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] transition-all"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.length === 0 ? (
                <EmptyCart />
              ) : (
                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <CartItemCard key={item.id} item={item} />
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-4 border-t border-white/[0.08] space-y-4">
                {/* Clear Cart */}
                <button
                  onClick={clearCart}
                  className="w-full py-2 text-sm text-white/50 hover:text-red-400 transition-colors"
                >
                  Clear Cart
                </button>

                {/* Total */}
                <div className="flex items-center justify-between py-3 border-t border-white/[0.08]">
                  <span className="text-white/70">Total</span>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">
                      {formatPrice(total)}
                    </p>
                    <p className="text-xs text-white/40">{currency}</p>
                  </div>
                </div>

                {/* Checkout Button */}
                <motion.button
                  onClick={handleCheckout}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-base flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-green-500/25 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Checkout via WhatsApp
                </motion.button>

                {/* Info Text */}
                <p className="text-xs text-white/40 text-center">
                  You&apos;ll be redirected to WhatsApp to complete your order
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// ============================================
// Floating Cart Button
// ============================================
export const FloatingCartButton: React.FC = () => {
  const { toggleCart, getItemCount, getTotal } = useCart();
  const { formatPrice } = useCurrency();
  const itemCount = getItemCount();
  const total = getTotal();

  if (itemCount === 0) return null;

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleCart}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all"
    >
      <div className="relative">
        <ShoppingBag className="w-5 h-5" />
        <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white text-indigo-600 text-xs font-bold flex items-center justify-center">
          {itemCount > 9 ? "9+" : itemCount}
        </span>
      </div>
      <div className="text-left">
        <p className="text-xs text-white/70">Cart Total</p>
        <p className="text-sm font-bold">{formatPrice(total)}</p>
      </div>
    </motion.button>
  );
};

export default Cart;
