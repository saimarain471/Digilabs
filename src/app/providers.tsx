"use client";

import React from "react";
import { CartProvider } from "@/context/CartContext";
import { Header, Cart, FloatingCartButton } from "@/components";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <CartProvider>
      <Header />
      <main className="pt-16 md:pt-20">{children}</main>
      <Cart />
      <FloatingCartButton />
    </CartProvider>
  );
};
