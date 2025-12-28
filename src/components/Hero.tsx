"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cloud, Sparkles, ArrowDown, Zap, Shield, Clock } from "lucide-react";

// ============================================
// Floating Icon Component
// ============================================
const FloatingIcon: React.FC<{
  icon: React.ReactNode;
  delay: number;
  x: string;
  y: string;
}> = ({ icon, delay, x, y }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="absolute"
      style={{ left: x, top: y }}
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay,
          ease: "easeInOut",
        }}
        className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-white/[0.1] to-white/[0.05] backdrop-blur-sm border border-white/[0.1] flex items-center justify-center shadow-lg"
      >
        {icon}
      </motion.div>
    </motion.div>
  );
};

// ============================================
// Hero Component
// ============================================
export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Mesh Gradient */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[128px]" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <FloatingIcon
          icon={<Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />}
          delay={0.2}
          x="15%"
          y="25%"
        />
        <FloatingIcon
          icon={<Shield className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />}
          delay={0.4}
          x="80%"
          y="20%"
        />
        <FloatingIcon
          icon={<Clock className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />}
          delay={0.6}
          x="10%"
          y="65%"
        />
        <FloatingIcon
          icon={<Sparkles className="w-6 h-6 md:w-8 md:h-8 text-pink-400" />}
          delay={0.8}
          x="85%"
          y="70%"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-8"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-50" />
          
          {/* Logo Container */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full h-full rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-500 flex items-center justify-center shadow-2xl shadow-indigo-500/30"
          >
            <Cloud className="w-12 h-12 md:w-16 md:h-16 text-white" />
          </motion.div>

          {/* Orbiting Particles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute -top-2 left-1/2 w-3 h-3 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/50" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/2 -right-2 w-2 h-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50" />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6"
        >
          Cart
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
            Cloudy
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-white/60 mb-8 md:mb-10 max-w-2xl mx-auto"
        >
          Your one-stop shop for premium digital subscriptions at unbeatable prices
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 md:mb-12"
        >
          {[
            { icon: Zap, text: "Instant Delivery" },
            { icon: Shield, text: "100% Secure" },
            { icon: Clock, text: "24/7 Support" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08]"
            >
              <feature.icon className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-white/70">{feature.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <motion.a
            href="#products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 text-white font-semibold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all"
          >
            <Sparkles className="w-5 h-5" />
            Explore Products
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/40"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
