"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const blogPost: { [key: string]: BlogPost } = {
  "netflix-alternatives-2024": {
    id: 1,
    title: "Top 10 Netflix Alternatives for Streaming in 2024",
    slug: "netflix-alternatives-2024",
    excerpt: "Streaming landscape continues to evolve rapidly...",
    content: `
      <h2>Introduction</h2>
      <p>Streaming landscape continues to evolve rapidly, and while Netflix remains a giant, numerous alternatives offer compelling content libraries, competitive pricing, and unique features. This comprehensive guide explores the best Netflix alternatives available in 2024.</p>
      
      <h2>1. Disney+</h2>
      <p>Disney's streaming service has become a major contender with exclusive access to Marvel, Star Wars, Pixar, and National Geographic content. At $7.99/month, it's an excellent value for families and fans of these franchises.</p>
      
      <h2>2. Hulu</h2>
      <p>Perfect for network TV lovers, Hulu offers next-day access to current shows from major networks. The ad-supported plan starts at just $7.99/month, making it one of the most affordable options.</p>
      
      <h2>3. HBO Max</h2>
      <p>Home to premium HBO content, Warner Bros. movies, and exclusive originals. At $15.99/month for the ad-free version, it's pricier but offers unmatched quality content.</p>
      
      <h2>Conclusion</h2>
      <p>The streaming market offers something for everyone. Consider your content preferences, budget, and viewing habits when choosing between these excellent Netflix alternatives.</p>
    `,
    author: "CartCloudy Team",
    date: "2024-01-15",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1489599904472-84978f312f2e?w=1200&q=80",
    category: "Streaming",
  },
  "avoid-account-scams": {
    id: 2,
    title: "How to Recognize and Avoid Digital Account Scams",
    slug: "avoid-account-scams",
    excerpt: "Essential tips to protect yourself from fraudulent sellers",
    content: `
      <h2>Introduction</h2>
      <p>With the rise of digital account marketplaces, scammers have become increasingly sophisticated. This guide will help you identify and avoid common scams when purchasing digital accounts.</p>
      
      <h2>Red Flags to Watch For</h2>
      <ul>
        <li>Prices that seem too good to be true</li>
        <li>Sellers who avoid using official platforms</li>
        <li>No customer reviews or testimonials</li>
        <li>Requests for payment through insecure methods</li>
      </ul>
      
      <h2>How CartCloudy Protects You</h2>
      <p>All our accounts are verified, we use secure payment methods, and offer 24/7 customer support. We also provide a 24-hour guarantee on all purchases.</p>
      
      <h2>What to Do If You've Been Scammed</h2>
      <p>Contact your payment provider immediately, report the seller to relevant authorities, and share your experience to help others avoid the same scam.</p>
    `,
    author: "Security Expert",
    date: "2024-01-12",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
    category: "Security",
  },
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPost[params.slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <Link href="/blogs" className="text-indigo-400 hover:text-indigo-300">
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-[#050505]">
      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back Button */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </Link>

          {/* Featured Image */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden mb-8"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          </motion.div>

          {/* Category Badge */}
          <motion.div variants={itemVariants} initial="hidden" animate="visible" className="mb-6">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium">
              {post.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-6 text-white/50 mb-8 pb-8 border-b border-white/[0.08]"
          >
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.article
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="prose prose-lg max-w-none prose-invert prose-headings:text-white prose-p:text-white/70 prose-li:text-white/60"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Social Share */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 pt-8 border-t border-white/[0.08] flex items-center justify-between"
          >
            <span className="text-white/60">Share this article:</span>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}