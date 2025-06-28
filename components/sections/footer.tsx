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
        <button className="bg-gradient-to-r from-[#F98C05] to-[#FF6B35] px-4 py-1 rounded-xl transition-transform transform duration-200 hover:scale-105 mt-3 md:mt-0">
          example@gmail.com
        </button>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-16 gap-x-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-xl font-semibold mb-5">About Us</h1>
          <p className="mb-3">27th Street, New York</p>
          <p className="mb-3">example@gmail.com</p>
          <p>XX XX XXX XXX</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col"
        >
          <h1 className="text-xl font-semibold mb-5">Services</h1>
          <Link href="/" className="mb-3 hover:text-orange-300 transition">
            Home
          </Link>
          <Link href="/" className="mb-3 hover:text-orange-300 transition">
            About
          </Link>
          <Link href="/" className="mb-3 hover:text-orange-300 transition">
            Services
          </Link>
          <Link href="/" className="mb-3 hover:text-orange-300 transition">
            Projects
          </Link>
          <Link href="/" className="mb-3 hover:text-orange-300 transition">
            Contact
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col"
        >
          <h1 className="text-xl font-semibold mb-5">Web Design</h1>
          <Link href="/" className="mb-3 hover:text-orange-300 transition">
            E-commerce
          </Link>
          <Link href="/" className="mb-3 hover:text-orange-300 transition">
            SEO
          </Link>
          <Link href="/" className="mb-3 hover:text-orange-300 transition">
            Digital Marketing
          </Link>
          <Link href="/" className="mb-3 hover:text-orange-300 transition">
            Projects
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col"
        >
          <h1 className="text-xl font-semibold mb-5">Development</h1>
          <Link href="/" className="mb-3 hover:text-orange-300 transition">
            Services
          </Link>
          <Link href="/" className="mb-3 hover:text-orange-300 transition">
            Shopify
          </Link>
          <Link href="/" className="mb-3 hover:text-orange-300 transition">
            Projects
          </Link>
          <Link href="/" className="mb-3 hover:text-orange-300 transition">
            About Us
          </Link>
          <Link href="/" className="mb-3 hover:text-orange-300 transition">
            Contact
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col"
        >
          <h1 className="text-xl font-semibold mb-5">An Odd Bunch</h1>
          <Link href="/" className="mb-3 hover:text-orange-300 transition">
            Cayman
          </Link>
          <Link href="/" className="hover:text-orange-300 transition">
            Australia
          </Link>
        </motion.div>
      </div>

      <div className="mt-20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
        <p>© 2025 Your Company. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-white transition">
            Terms & Services
          </Link>
          <Link href="/" className="hover:text-white transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
