"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_CONFIG } from "@/types";

interface WhatsAppButtonProps {
  message?: string;
  floating?: boolean;
  variant?: "compact" | "full";
  productName?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = "Hello! I'm interested in your digital accounts and services.",
  floating = false,
  variant = "compact",
  productName,
  className = "",
}) => {
  const phone = WHATSAPP_CONFIG.phone;
  const baseUrl = WHATSAPP_CONFIG.baseUrl;
  
  const getMessage = () => {
    let msg = message;
    if (productName) {
      msg = `Hello! I'm interested in purchasing: ${productName}`;
    }
    return encodeURIComponent(msg);
  };
  
  const whatsappUrl = `${baseUrl}${phone}?text=${getMessage()}`;

  const buttonVariants = {
    floating: {
      initial: { scale: 0, opacity: 0 },
      animate: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: 1,
          type: "spring",
          stiffness: 260,
          damping: 20,
        },
      },
      whileHover: {
        scale: 1.1,
        transition: { duration: 0.2 },
      },
      whileTap: { scale: 0.95 },
      pulse: {
        boxShadow: [
          "0 0 0 0 rgba(34, 197, 94, 0.7)",
          "0 0 0 20px rgba(34, 197, 94, 0)",
        ],
        transition: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
      },
    },
    static: {
      whileHover: { scale: 1.02, y: -2 },
      whileTap: { scale: 0.98 },
    },
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-medium rounded-2xl transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:ring-offset-0
  `;

  const variantClasses = {
    compact: `
      px-4 py-2 text-sm bg-gradient-to-r from-green-500 to-green-600 text-white
      shadow-lg hover:shadow-green-500/25 hover:from-green-600 hover:to-green-500
    `,
    full: `
      w-full px-6 py-4 text-base font-semibold bg-gradient-to-r from-green-500 to-green-600 text-white
      shadow-xl hover:shadow-green-500/30 hover:from-green-600 hover:to-green-500
    `,
  };

  const floatingClasses = `
    fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600
    shadow-2xl hover:shadow-green-500/40 z-50
  `;

  if (floating) {
    return (
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        variants={buttonVariants.floating}
        initial="initial"
        animate="animate"
        whileHover="whileHover"
        whileTap="whileTap"
        animate={{
          ...buttonVariants.floating.animate,
          pulse: buttonVariants.floating.pulse,
        }}
        className={`${baseClasses} ${floatingClasses} ${className}`}
      >
        <svg
          className="w-7 h-7 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </motion.a>
    );
  }

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      variants={buttonVariants.static}
      whileHover="whileHover"
      whileTap="whileTap"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {variant === "compact" ? "Buy via WhatsApp" : "Contact via WhatsApp"}
    </motion.a>
  );
};