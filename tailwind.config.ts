import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ============================================
      // CartCloudy Color Palette
      // ============================================
      colors: {
        // Background Colors
        background: {
          DEFAULT: "#050505",
          primary: "#050505",
          secondary: "#0a0a0a",
          tertiary: "#111111",
        },
        // Glass Colors
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          light: "rgba(255, 255, 255, 0.08)",
          medium: "rgba(255, 255, 255, 0.12)",
          border: "rgba(255, 255, 255, 0.1)",
        },
        // Accent Colors (Gradient stops)
        accent: {
          primary: "#6366f1", // Indigo
          secondary: "#8b5cf6", // Purple
          tertiary: "#a855f7", // Violet
        },
        // Text Colors
        text: {
          primary: "#ffffff",
          secondary: "rgba(255, 255, 255, 0.7)",
          tertiary: "rgba(255, 255, 255, 0.5)",
          muted: "rgba(255, 255, 255, 0.3)",
        },
      },
      // ============================================
      // Typography
      // ============================================
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
      },
      // ============================================
      // Spacing & Sizing
      // ============================================
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      // ============================================
      // Shadows
      // ============================================
      boxShadow: {
        glow: "0 0 40px rgba(99, 102, 241, 0.3)",
        "glow-lg": "0 0 60px rgba(99, 102, 241, 0.4)",
        "glow-purple": "0 0 40px rgba(139, 92, 246, 0.3)",
        "glow-green": "0 0 40px rgba(16, 185, 129, 0.3)",
      },
      // ============================================
      // Animations
      // ============================================
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-up": "fadeUp 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      // ============================================
      // Backdrop Blur
      // ============================================
      backdropBlur: {
        xs: "2px",
      },
      // ============================================
      // Z-Index
      // ============================================
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
    },
  },
  plugins: [],
};

export default config;
