"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#1F2B68] text-white py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center md:text-right pb-6 mb-16 border-b border-white/30"
      >
        <span className="text-lg block md:inline mr-0 md:mr-8 mb-3 md:mb-0">
          Send us email at
        </span>
        <button className="bg-gradient-to-r from-[#FF9A63] to-[#FE804B] px-4 py-1 rounded-xl transition-transform transform duration-200 hover:scale-105 mt-3 md:mt-0">
          hello@codesblue.com
        </button>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-16 gap-x-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-xl font-semibold mb-5">Contact Info</h1>
          <p className="mb-3">Remote & Global</p>
          <p className="mb-3">hello@codesblue.com</p>
          <p>Available 24/7</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col"
        >
          <h1 className="text-xl font-semibold mb-5">Navigation</h1>
          <Link href="#home" className="mb-3 hover:text-orange-300 transition">
            Home
          </Link>
          <Link href="#about" className="mb-3 hover:text-orange-300 transition">
            About
          </Link>
          <Link href="#services" className="mb-3 hover:text-orange-300 transition">
            Services
          </Link>
          <Link href="#projects" className="mb-3 hover:text-orange-300 transition">
            Projects
          </Link>
          <Link href="#contact" className="mb-3 hover:text-orange-300 transition">
            Contact
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col"
        >
          <h1 className="text-xl font-semibold mb-5">Web Development</h1>
          <Link href="#services" className="mb-3 hover:text-orange-300 transition">
            React & Next.js
          </Link>
          <Link href="#services" className="mb-3 hover:text-orange-300 transition">
            E-commerce Sites
          </Link>
          <Link href="#services" className="mb-3 hover:text-orange-300 transition">
            Landing Pages
          </Link>
          <Link href="#services" className="mb-3 hover:text-orange-300 transition">
            Custom Solutions
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col"
        >
          <h1 className="text-xl font-semibold mb-5">App Development</h1>
          <Link href="#services" className="mb-3 hover:text-orange-300 transition">
            Mobile Apps
          </Link>
          <Link href="#services" className="mb-3 hover:text-orange-300 transition">
            React Native
          </Link>
          <Link href="#services" className="mb-3 hover:text-orange-300 transition">
            Cross-Platform
          </Link>
          <Link href="#services" className="mb-3 hover:text-orange-300 transition">
            App Store Deploy
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col"
        >
          <h1 className="text-xl font-semibold mb-5">Design Services</h1>
          <Link href="#services" className="mb-3 hover:text-orange-300 transition">
            Figma Design
          </Link>
          <Link href="#services" className="mb-3 hover:text-orange-300 transition">
            UI/UX Design
          </Link>
          <Link href="#services" className="mb-3 hover:text-orange-300 transition">
            Prototyping
          </Link>
          <Link href="#services" className="hover:text-orange-300 transition">
            Brand Identity
          </Link>
        </motion.div>
      </div>

      <div className="mt-20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
        <p>© 2025 CodesBlue. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/terms" className="hover:text-white transition">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
