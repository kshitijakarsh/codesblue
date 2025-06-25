"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative bg-[#1F2B68] text-white min-h-[110vh] pl-28 overflow-hidden">
      <motion.div
        className="text-8xl font-bold pt-28 w-full"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>
          We develop the <span className="text-orange-400">eye</span>
        </h1>

        <h1 className="flex">
          <motion.span
            className="mt-7"
            initial={{ x: -10, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
          >
            <img src="arrow.svg" alt="arrow" />
          </motion.span>
          <span className="text-orange-400 ml-4 mr-4"> catching </span>
          brands
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="w-[440px] h-[90px] mt-12 text-[23px] leading-6 font-light">
          Empower your franchises and locations to grow with our intelligent
          dashboards and tools
        </p>
      </motion.div>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <button
          className="
            bg-white text-black p-3 text-xl rounded-xl 
            shadow-[inset_0_-4px_0_rgba(0,0,0,0.2),0_8px_0_0_rgba(0,0,0,0.2)]
            active:translate-y-[4px] active:shadow-[inset_0_-2px_0_rgba(0,0,0,0.2)]
            transition-all duration-150
          "
        >
          Contact Us
        </button>
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-0 pr-15"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <img src="./hero.svg" alt="hero" className="w-[570px] h-[464px]" />
      </motion.div>

      <motion.div
        className="mt-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <img src="./brands.svg" alt="brands" className="w-[540px] h-[50px]" />
      </motion.div>
    </div>
  );
}
