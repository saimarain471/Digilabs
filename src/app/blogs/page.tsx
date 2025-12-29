"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Top 10 Netflix Alternatives for Streaming in 2024",
    slug: "netflix-alternatives-2024",
    excerpt: "Discover the best streaming platforms beyond Netflix, including Disney+, Hulu, and exclusive regional services.",
    content: "Detailed guide on streaming alternatives...",
    author: "CartCloudy Team",
    date: "2024-01-15",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1489599904472-84978f312f2e?w=800&q=80",
    category: "Streaming",
  },
  {
    id: 2,
    title: "How to Recognize and Avoid Digital Account Scams",
    slug: "avoid-account-scams",
    excerpt: "Essential tips to protect yourself from fraudulent sellers and ensure secure digital account purchases.",
    content: "Comprehensive guide on identifying scams...",
    author: "Security Expert",
    date: "2024-01-12",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    category: "Security",
  },
  {
    id: 3,
    title: "Why Choose Shared Accounts Over Individual Subscriptions",
    slug: "shared-accounts-benefits",
    excerpt: "Learn how shared premium accounts can save you money while providing the same premium features.",
    content: "Benefits of shared accounts...",
    author: "Account Specialist",
    date: "2024-01-10",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80",
    category: "Guides",
  },
  {
    id: 4,
    title: "Best Gaming Accounts with Pre-Loaded Games in 2024",
    slug: "gaming-accounts-guide",
    excerpt: "Explore premium gaming accounts featuring top titles across Steam, Xbox Game Pass, and PlayStation Network.",
    content: "Gaming account recommendations...",
    author: "Gaming Expert",
    date: "2024-01-08",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    category: "Gaming",
  },
  {
    id: 5,
    title: "Setting Up Your New Streaming Account: Complete Guide",
    slug: "streaming-setup-guide",
    excerpt: "Step-by-step instructions to get your Netflix, Disney+, or other streaming accounts running smoothly.",
    content: "Setup guide for streaming services...",
    author: "Technical Support",
    date: "2024-01-05",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
    category: "Tutorials",
  },
  {
    id: 6,
    title: "The Future of AI Tools: Claude, GPT-4, and Beyond",
    slug: "ai-tools-future",
    excerpt: "An in-depth look at advanced AI subscriptions and how they're transforming productivity and creativity.",
    content: "AI tools analysis and comparison...",
    author: "AI Researcher",
    date: "2024-01-03",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    category: "AI & Technology",
  },
];

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

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Page Header */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Blog & Resources
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Stay updated with the latest news, tips, and guides about digital accounts,
              streaming services, and online security.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] transition-all duration-300 hover:border-white/[0.15] hover:shadow-2xl"
              >
                {/* Featured Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-white/50">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-white leading-tight group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-violet-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-white/60 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-all duration-300 group-hover:gap-2"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.article>
            ))}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated & Get Exclusive Deals
            </h3>
            <p className="text-white/60 mb-6 max-w-md mx-auto">
              Subscribe to our newsletter for the latest product updates, security tips, and special offers.
            </p>
            <div className="max-w-md mx-auto space-y-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder:text-white/40 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all hover:shadow-lg"
              >
                Subscribe Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}