"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ShoppingCart,
  ChevronDown,
  Home,
  ShoppingBag,
  HelpCircle,
  Package,
  Headphones,
  Cloud,
} from "lucide-react";
import { useCurrency, useCart } from "@/context/CartContext";
import { Currency } from "@/types";

// ============================================
// Currency Selector Component
// ============================================
const CurrencySelector: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const { currency, setCurrency, currencies } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);

  const currentCurrency = currencies.find((c) => c.code === currency);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] transition-all ${
          isMobile ? "w-full justify-between" : ""
        }`}
      >
        <span className="text-lg">{currentCurrency?.flag}</span>
        <span className="text-sm font-medium text-white">{currency}</span>
        <ChevronDown
          className={`w-4 h-4 text-white/60 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className={`absolute z-50 mt-2 py-2 rounded-xl bg-[#111111] border border-white/[0.1] shadow-xl backdrop-blur-xl ${
                isMobile ? "left-0 right-0" : "right-0 min-w-[140px]"
              }`}
            >
              {currencies.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => {
                    setCurrency(curr.code as Currency);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/[0.05] transition-colors ${
                    currency === curr.code ? "bg-white/[0.08]" : ""
                  }`}
                >
                  <span className="text-lg">{curr.flag}</span>
                  <div className="text-left">
                    <p className="text-sm font-medium text-white">{curr.code}</p>
                    <p className="text-xs text-white/50">{curr.name}</p>
                  </div>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

// ============================================
// Navigation Links
// ============================================
const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/shop", label: "Shop", icon: ShoppingBag },
  { href: "/how-it-works", label: "How It Works", icon: HelpCircle },
  { href: "/track-order", label: "Track Order", icon: Package },
  { href: "/support", label: "Support", icon: Headphones },
];

// ============================================
// Header Component
// ============================================
export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getItemCount, toggleCart } = useCart();
  const itemCount = getItemCount();

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.05]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white hidden sm:block">
                Cart<span className="text-indigo-400">Cloudy</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/[0.05]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Currency Selector (Desktop) */}
              <div className="hidden md:block">
                <CurrencySelector />
              </div>

              {/* Cart Button */}
              <button
                onClick={toggleCart}
                className="relative p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] transition-all"
              >
                <ShoppingCart className="w-5 h-5 text-white" />
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold flex items-center justify-center"
                  >
                    {itemCount > 9 ? "9+" : itemCount}
                  </motion.span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] transition-all"
              >
                <Menu className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[#0a0a0a] border-l border-white/[0.08]"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/[0.08]">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">
                    Cart<span className="text-indigo-400">Cloudy</span>
                  </span>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] transition-all"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Menu Content */}
              <div className="p-4 space-y-6 overflow-y-auto h-[calc(100%-80px)]">
                {/* Currency Selector */}
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-2">
                    Currency
                  </p>
                  <CurrencySelector isMobile />
                </div>

                {/* Navigation Links */}
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-2">
                    Navigation
                  </p>
                  <nav className="space-y-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/[0.05] transition-all"
                      >
                        <link.icon className="w-5 h-5" />
                        <span className="font-medium">{link.label}</span>
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Sign In Button */}
                <div className="pt-4 border-t border-white/[0.08]">
                  <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/25">
                    Sign In with Google
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
