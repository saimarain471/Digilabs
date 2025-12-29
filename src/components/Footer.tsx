"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cloud, Facebook, Twitter, Instagram, MessageCircle } from "lucide-react";
import { WHATSAPP_CONFIG } from "@/types";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const footerLinks = {
    products: [
      { name: "Streaming Accounts", href: "/tools/streaming" },
      { name: "Gaming Accounts", href: "/tools/gaming" },
      { name: "Xbox Game Pass", href: "/tools/xbox" },
      { name: "Free Courses", href: "/tools/courses" },
      { name: "All Products", href: "/tools" },
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "WhatsApp Support", href: `https://wa.me/${WHATSAPP_CONFIG.phone.replace('+', '')}`, external: true },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
    company: [
      { name: "About CartCloudy", href: "/" },
      { name: "Blog", href: "/blogs" },
      { name: "Testimonials", href: "/#reviews" },
      { name: "Why Choose Us", href: "/#why-us" },
    ],
  };

  return (
    <footer className="border-t border-white/[0.05] bg-gradient-to-b from-transparent to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Cloud className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CartCloudy</span>
            </Link>
            <p className="text-sm text-white/60 mb-4">
              Premium digital accounts at unbeatable prices. Secure, reliable, and delivered instantly via WhatsApp.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_CONFIG.phone.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 hover:bg-green-500/30 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Products */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">
              Products
            </h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/60 hover:text-white transition-colors inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-xs text-white/50 mb-1">WhatsApp Support:</p>
              <a
                href={`https://wa.me/${WHATSAPP_CONFIG.phone.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-green-400 hover:text-green-300"
              >
                {WHATSAPP_CONFIG.phone}
              </a>
            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-white/40">
            © {currentYear} CartCloudy. All rights reserved. Premium digital accounts marketplace.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <span>24/7 WhatsApp: {WHATSAPP_CONFIG.phone}</span>
            <span>
              Secured by{" "}
              <span className="text-indigo-400 font-medium">SSL</span>
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;