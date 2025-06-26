"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="bg-[#1F2B68] text-white py-20 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-right pb-6 mb-16 border-b border-white/30 "
      >
        <span className="text-lg mr-8">Send us email at</span>
        <button className="bg-gradient-to-r from-[#FF9A63] to-[#FE804B] px-4 py-1 rounded-xl transition-transform transform duration-200 hover:scale-105">
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
          {["Home", "About", "Services", "Projects", "Contact"].map(
            (item, i) => (
              <a
                key={i}
                href="/"
                className="mb-3 hover:text-orange-300 transition"
              >
                {item}
              </a>
            )
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col"
        >
          <h1 className="text-xl font-semibold mb-5">Web Design</h1>
          {["E-commerce", "SEO", "Digital Marketing", "Projects"].map(
            (item, i) => (
              <a
                key={i}
                href="/"
                className="mb-3 hover:text-orange-300 transition"
              >
                {item}
              </a>
            )
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col"
        >
          <h1 className="text-xl font-semibold mb-5">Development</h1>
          {["Services", "Shopify", "Projects", "About Us", "Contact"].map(
            (item, i) => (
              <a
                key={i}
                href="/"
                className="mb-3 hover:text-orange-300 transition"
              >
                {item}
              </a>
            )
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col"
        >
          <h1 className="text-xl font-semibold mb-5">An Odd Bunch</h1>
          <a href="/" className="mb-3 hover:text-orange-300 transition">
            Cayman
          </a>
          <a href="/" className="hover:text-orange-300 transition">
            Australia
          </a>
        </motion.div>
      </div>

      <div className="mt-20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
        <p>© 2025 Your Company. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/" className="hover:text-white transition">
            Terms & Services
          </a>
          <a href="/" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
