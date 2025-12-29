"use client";

import React from "react";
import { motion } from "framer-motion";

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

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Page Header */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg text-white/60">
              Last Updated: January 2024
            </p>
          </motion.div>

          {/* Legal Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            {/* Introduction */}
            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Welcome to CartCloudy</h2>
              <p className="text-white/70 leading-relaxed">
                Welcome to CartCloudy. By accessing and using our website at cartcloudy.com, 
                you agree to be bound by these Terms and Conditions. Please read them carefully 
                before using our services.
              </p>
            </motion.section>

            {/* Services */}
            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Services Provided</h2>
              <p className="text-white/70 leading-relaxed mb-3">
                CartCloudy provides premium shared digital accounts for various platforms including:
              </p>
              <ul className="list-disc list-inside text-white/60 space-y-2 ml-4">
                <li>Streaming services (Netflix, Disney+, Hulu, etc.)</li>
                <li>Gaming platforms and accounts</li>
                <li>Productivity tools and software</li>
                <li>Educational platforms and courses</li>
                <li>AI tools and creative software</li>
              </ul>
              <p className="text-white/70 leading-relaxed mt-3">
                All accounts are shared as per the original service provider's terms of service. 
                We act as an intermediary to provide access to these services.
              </p>
            </motion.section>

            {/* Account Usage */}
            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Account Usage & Restrictions</h2>
              
              <h3 className="text-lg font-semibold text-white mt-4 mb-2">2.1 Personal Use</h3>
              <p className="text-white/70 leading-relaxed">
                All accounts are provided for personal use only. You may not resell, redistribute, 
                or share your access credentials with third parties beyond your immediate household.
              </p>

              <h3 className="text-lg font-semibold text-white mt-4 mb-2">2.2 Profile Restrictions</h3>
              <p className="text-white/70 leading-relaxed">
                For streaming services, you are limited to using the provided profile(s) only. 
                Creating additional profiles or modifying existing ones may result in service suspension.
              </p>

              <h3 className="text-lg font-semibold text-white mt-4 mb-2">2.3 Security</h3>
              <p className="text-white/70 leading-relaxed">
                You are responsible for maintaining the security of your login credentials. 
                Any unauthorized access should be reported immediately to our support team.
              </p>
            </motion.section>

            {/* Payment & Refunds */}
            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Payment & Refunds</h2>
              
              <h3 className="text-lg font-semibold text-white mt-4 mb-2">3.1 Pricing</h3>
              <p className="text-white/70 leading-relaxed">
                All prices are listed in USD, PKR, and INR. Prices are subject to change without notice, 
                but will not affect existing subscriptions.
              </p>

              <h3 className="text-lg font-semibold text-white mt-4 mb-2">3.2 Payment Methods</h3>
              <p className="text-white/70 leading-relaxed">
                We accept payments through secure methods. All transactions are processed 
                through reputable payment gateways.
              </p>

              <h3 className="text-lg font-semibold text-white mt-4 mb-2">3.3 Refund Policy</h3>
              <div className="text-white/70 leading-relaxed space-y-2">
                <p>We offer a 24-hour refund policy for accounts that are non-functional:</p>
                <ul className="list-disc list-inside text-white/60 space-y-1 ml-4">
                  <li>Full refund if account doesn't work within 1 hour of delivery</li>
                  <li>Partial refund if account stops working within 24 hours (prorated)</li>
                  <li>No refund after 24 hours of successful usage</li>
                  <li>Replacement provided if account becomes non-functional</li>
                </ul>
              </div>
            </motion.section>

            {/* Delivery */}
            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Delivery Policy</h2>
              <p className="text-white/70 leading-relaxed">
                Account credentials are delivered via WhatsApp within 2-24 hours of payment confirmation. 
                Delivery times may vary during peak hours or holidays. You will receive:
              </p>
              <ul className="list-disc list-inside text-white/60 space-y-2 ml-4 mt-3">
                <li>Login email/username</li>
                <li>Login password</li>
                <li>Setup instructions if required</li>
                <li>24/7 support contact information</li>
              </ul>
            </motion.section>

            {/* Service Limitations */}
            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Service Limitations</h2>
              <p className="text-white/70 leading-relaxed mb-3">
                We are not responsible for:
              </p>
              <ul className="list-disc list-inside text-white/60 space-y-2 ml-4">
                <li>Service interruptions caused by the original platform provider</li>
                <li>Content availability changes by streaming services</li>
                <li>Account suspension by original service providers</li>
                <li>Regional restrictions imposed by service providers</li>
                <li>User's device or internet connectivity issues</li>
              </ul>
              <p className="text-white/70 leading-relaxed mt-3">
                We strive to provide stable accounts, but ultimate control lies with the original service providers.
              </p>
            </motion.section>

            {/* Support */}
            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Customer Support</h2>
              <p className="text-white/70 leading-relaxed">
                Our support team is available 24/7 through WhatsApp at +92 370 473 1692. 
                We typically respond within 30 minutes and resolve issues within 2 hours.
              </p>
            </motion.section>

            {/* Privacy */}
            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Privacy Policy</h2>
              <p className="text-white/70 leading-relaxed">
                We collect minimal personal information required for service delivery. 
                We do not share your data with third parties. For full details, 
                please see our Privacy Policy.
              </p>
            </motion.section>

            {/* Modifications */}
            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h2>
              <p className="text-white/70 leading-relaxed">
                We reserve the right to modify these terms at any time. 
                Continued use of our services after changes constitutes acceptance of new terms.
              </p>
            </motion.section>

            {/* Contact */}
            <motion.section variants={itemVariants} className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
              <p className="text-white/70 leading-relaxed">
                For questions about these Terms, please contact us:
              </p>
              <ul className="list-none text-white/60 space-y-2 ml-4 mt-3">
                <li>📱 WhatsApp: +92 370 473 1692</li>
                <li>📧 Email: support@cartcloudy.com</li>
                <li>🌐 Website: https://cartcloudy.com</li>
              </ul>
            </motion.section>

            {/* Acceptance */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-4">10. Acceptance of Terms</h2>
              <p className="text-white/70 leading-relaxed">
                By making a purchase from CartCloudy, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms and Conditions.
              </p>
            </motion.section>

            {/* Footer Note */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-white/[0.08] text-center"
            >
              <p className="text-sm text-white/50">
                CartCloudy - Premium Digital Accounts & Services
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}