"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Users, Zap } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Khan",
    initial: "S",
    product: "Netflix Premium",
    rating: 5,
    quote: "Amazing service! Got my Netflix account within 2 hours. Quality is excellent and the support team is super responsive.",
  },
  {
    name: "Ahmed Hassan",
    initial: "A",
    product: "Xbox Game Pass Ultimate",
    rating: 5,
    quote: "Been using their services for 6 months now. Never had any issues. Way better than dealing with scammers online.",
  },
  {
    name: "Priya Sharma",
    initial: "P",
    product: "Adobe Creative Cloud",
    rating: 5,
    quote: "The savings are incredible! I'm getting all the Adobe apps I need for my design work at a fraction of the cost.",
  },
];

const features = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "Verified accounts with secure payment processing",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Get your accounts within 2-24 hours via WhatsApp",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "WhatsApp support at +92 370 473 1692 available round the clock",
  },
  {
    icon: Zap,
    title: "Instant Access",
    description: "Start using your premium accounts immediately after setup",
  },
];

export const TrustSection: React.FC = () => {
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

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Why Choose CartCloudy Over Scammers?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            We're a legitimate business with proven track record, verified accounts, 
            and real customer support - not disappearing after payment.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-6 hover:border-white/[0.15] transition-all duration-300 hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-indigo-400" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 md:p-12"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-white mb-8 text-center"
          >
            What Our Customers Say
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-white/[0.03] to-white/[0.02] rounded-2xl p-6 border border-white/[0.05] hover:border-white/[0.08] transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-white/70 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-white/50 text-sm">{testimonial.product}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          {[
            "Money Back Guarantee",
            "24/7 Support",
            "Instant Delivery",
            "Verified Accounts",
            "Secure Payment",
          ].map((badge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] hover:border-green-500/30 transition-colors"
            >
              <svg
                className="w-4 h-4 text-green-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              <span className="text-sm font-medium text-white/70">
                {badge}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/tools"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Start Shopping Now
            <svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;