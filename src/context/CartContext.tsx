"use client";

import React, { createContext, useContext, useEffect, ReactNode } from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Currency, CartItem, CURRENCIES, WHATSAPP_CONFIG } from "@/types";

// ============================================
// Currency Store
// ============================================
interface CurrencyState {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set) => ({
      currency: "USD",
      setCurrency: (currency) => set({ currency }),
    }),
    {
      name: "cartcloudy-currency",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// ============================================
// Cart Store
// ============================================
interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addToCart: (item: Omit<CartItem, "id" | "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addToCart: (item) => {
        const items = get().items;
        const existingItem = items.find(
          (i) => i.productId === item.productId && i.planId === item.planId
        );

        if (existingItem) {
          set({
            items: items.map((i) =>
              i.id === existingItem.id
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          });
        } else {
          const newItem: CartItem = {
            ...item,
            id: `${item.productId}-${item.planId}-${Date.now()}`,
            quantity: 1,
          };
          set({ items: [...items, newItem] });
        }
        set({ isOpen: true });
      },

      removeFromCart: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      toggleCart: () => set({ isOpen: !get().isOpen }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      getTotal: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: "cartcloudy-cart",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    }
  )
);

// ============================================
// Currency Context (for SSR compatibility)
// ============================================
interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  currencies: typeof CURRENCIES;
  formatPrice: (price: number) => string;
  getCurrencySymbol: () => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

// ============================================
// Cart Context (for SSR compatibility)
// ============================================
interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addToCart: (item: Omit<CartItem, "id" | "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
  generateWhatsAppMessage: (userEmail?: string) => string;
  getWhatsAppUrl: (userEmail?: string) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// ============================================
// Combined Provider
// ============================================
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const currencyStore = useCurrencyStore();
  const cartStore = useCartStore();

  // Detect user location for default currency
  useEffect(() => {
    const detectCurrency = async () => {
      try {
        // Only detect if currency hasn't been set by user
        const stored = localStorage.getItem("cartcloudy-currency");
        if (stored) return;

        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const countryCode = data.country_code;

        if (countryCode === "PK") {
          currencyStore.setCurrency("PKR");
        } else if (countryCode === "IN") {
          currencyStore.setCurrency("INR");
        } else {
          currencyStore.setCurrency("USD");
        }
      } catch (error) {
        console.log("Could not detect location, defaulting to USD");
      }
    };

    detectCurrency();
  }, []);

  // Format price based on currency
  const formatPrice = (price: number): string => {
    const formatters: Record<Currency, Intl.NumberFormat> = {
      USD: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }),
      PKR: new Intl.NumberFormat("en-PK", {
        style: "currency",
        currency: "PKR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
      INR: new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }),
    };

    return formatters[currencyStore.currency]?.format(price) || `${price}`;
  };

  // Get currency symbol
  const getCurrencySymbol = (): string => {
    const currency = CURRENCIES.find((c) => c.code === currencyStore.currency);
    return currency?.symbol || "$";
  };

  // Generate WhatsApp message
  const generateWhatsAppMessage = (userEmail?: string): string => {
    const items = cartStore.items;
    const currency = currencyStore.currency;
    const total = cartStore.getTotal();

    let message = "Hello CartCloudy! I want to buy:\n";
    message += "--------------------------\n";

    items.forEach((item, index) => {
      message += `${index + 1}. ${item.productName} (${item.planName}) - ${formatPrice(item.price * item.quantity)}\n`;
    });

    message += "--------------------------\n";
    message += `Total: ${formatPrice(total)} ${currency}\n`;

    if (userEmail) {
      message += `My Email: ${userEmail}\n`;
    }

    return message;
  };

  // Get WhatsApp URL
  const getWhatsAppUrl = (userEmail?: string): string => {
    const message = generateWhatsAppMessage(userEmail);
    const encodedMessage = encodeURIComponent(message);
    return `${WHATSAPP_CONFIG.baseUrl}${WHATSAPP_CONFIG.phone}?text=${encodedMessage}`;
  };

  const currencyValue: CurrencyContextType = {
    currency: currencyStore.currency,
    setCurrency: currencyStore.setCurrency,
    currencies: CURRENCIES,
    formatPrice,
    getCurrencySymbol,
  };

  const cartValue: CartContextType = {
    items: cartStore.items,
    isOpen: cartStore.isOpen,
    addToCart: cartStore.addToCart,
    removeFromCart: cartStore.removeFromCart,
    updateQuantity: cartStore.updateQuantity,
    clearCart: cartStore.clearCart,
    toggleCart: cartStore.toggleCart,
    openCart: cartStore.openCart,
    closeCart: cartStore.closeCart,
    getTotal: cartStore.getTotal,
    getItemCount: cartStore.getItemCount,
    generateWhatsAppMessage,
    getWhatsAppUrl,
  };

  return (
    <CurrencyContext.Provider value={currencyValue}>
      <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
    </CurrencyContext.Provider>
  );
};

// ============================================
// Hooks
// ============================================
export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CartProvider");
  }
  return context;
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// ============================================
// Price Utility Functions
// ============================================
export const getPriceByKey = (
  plan: { price_usd: number; price_pkr: number; price_inr: number },
  currency: Currency
): number => {
  const priceMap: Record<Currency, number> = {
    USD: plan.price_usd,
    PKR: plan.price_pkr,
    INR: plan.price_inr,
  };
  return priceMap[currency] || plan.price_usd;
};

export const getLowestPrice = (
  plans: Array<{ price_usd: number; price_pkr: number; price_inr: number }>,
  currency: Currency
): number => {
  if (!plans || plans.length === 0) return 0;
  return Math.min(...plans.map((plan) => getPriceByKey(plan, currency)));
};
