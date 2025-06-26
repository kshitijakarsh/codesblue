"use client";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-[#1F2B68] py-[140px] px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-5xl text-white font-semibold w-full md:w-[476px]">
          Design beautiful websites
        </h1>
        <p className="text-white pt-6 md:pt-9 w-full md:w-[377px]">
          Empower your franchisees and locations to grow with our intelligent
          dashboards and tools.
        </p>

        <motion.button
          className="p-2 mt-8 md:mt-9 rounded-xl bg-gradient-to-r from-[#FF9A63] to-[#FE804B] text-white drop-shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>

        <motion.div
          className="flex -space-x-4 pt-8 md:pt-9"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d"
            alt="User 1"
            className="w-14 h-14 rounded-full border-2 border-black"
          />
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
            alt="User 2"
            className="w-14 h-14 rounded-full border-2 border-black"
          />
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2"
            alt="User 3"
            className="w-14 h-14 rounded-full border-2 border-black"
          />
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            src="https://images.unsplash.com/photo-1640951613773-54706e06851d"
            alt="User 4"
            className="w-14 h-14 rounded-full border-2 border-black"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl text-white font-semibold mt-4">
            1000+
          </h1>
          <p className="text-base md:text-xl text-white font-normal">
            Positive Feedback
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src="./features.svg" alt="Features" className="w-full" />
      </motion.div>
    </div>
  );
}
