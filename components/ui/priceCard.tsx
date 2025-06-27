"use client";
import { motion } from "framer-motion";

export default function PriceCard() {
  return (
    <div className="flex flex-wrap justify-center items-end gap-6 px-4 bg-[#1F2B68] pb-20">
      <motion.div
        className="w-full sm:w-[374px] bg-[#183282] border border-white rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.03 }}
      >
        <div>
          <h2 className="text-2xl font-semibold mb-2">Web Development</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            We specialize in developing interactive and conversion-focused
            websites.
          </p>
        </div>
        <div className="mt-6 space-y-3">
          <p className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            01 Visibility
          </p>
          <p className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            02 Identity
          </p>
          <p className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            03 Messaging
          </p>
          <p className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            04 Value Proposition
          </p>
          <p className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            05 CRO
          </p>
        </div>
      </motion.div>

      <motion.div
        className="w-full sm:w-[374px] bg-gradient-to-b from-[#7796FD] to-[#4958CC] border border-white rounded-2xl px-6 py-10 sm:py-14 text-white flex flex-col justify-between shadow-lg relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        <div>
          <h2 className="text-2xl font-semibold mb-2">Web Design</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            We specialize in developing interactive experiences.
          </p>
        </div>
        <div className="mt-6 space-y-3">
          <p className="border-b border-gray-100 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            01 UI/UX
          </p>
          <p className="border-b border-gray-100 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            02 Landing Pages
          </p>
          <p className="border-b border-gray-100 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            03 Redesigns
          </p>
          <p className="border-b border-gray-100 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            04 Functionality
          </p>
          <p className="border-b border-gray-100 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            05 Optimization
          </p>
        </div>
      </motion.div>

      <motion.div
        className="w-full sm:w-[374px] bg-[#183282] border border-white rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.03 }}
      >
        <div>
          <h2 className="text-2xl font-semibold mb-2">E-commerce</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            Developing interactive, scalable, brand-oriented platforms.
          </p>
        </div>
        <div className="mt-6 space-y-3">
          <p className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            01 3D Animation
          </p>
          <p className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            02 Socials
          </p>
          <p className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            03 Paid Ads
          </p>
          <p className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            04 On-Page
          </p>
          <p className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer">
            05 Technical
          </p>
        </div>
      </motion.div>
    </div>
  );
}
