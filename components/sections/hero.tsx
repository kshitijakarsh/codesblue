"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative bg-[#1F2B68] text-white min-h-[100vh] px-4 sm:px-6 md:pl-28 overflow-hidden">
      <motion.div
        className="pt-20 md:pt-28 w-full"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="block md:hidden mb-2"
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img src="arrow.svg" alt="arrow" className="w-10" />
        </motion.div>

        <h1 className="text-3xl sm:text-4xl md:text-8xl font-bold leading-tight flex flex-wrap md:flex-col md:items-start">
          <span className="hidden md:inline">
            We develop the <span className="text-orange-400">eye</span>
          </span>
          <span className="hidden md:flex items-center mt-4">
            <motion.span
              className="mt-7"
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
            >
              <img src="arrow.svg" alt="arrow" />
            </motion.span>
            <span className="text-orange-400 ml-4 mr-4">catching</span>
            <span>brands</span>
          </span>

          <span className="md:hidden">
            We develop the <span className="text-orange-400">eye</span>{" "}
            catching brands
          </span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="max-w-full sm:max-w-[440px] mt-6 sm:mt-10 text-base sm:text-lg md:text-[23px] leading-relaxed font-light">
          Empower your franchises and locations to grow with our intelligent
          dashboards and tools.
        </p>
      </motion.div>

      <motion.div
        className="mt-8 sm:mt-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <button
          className="
            bg-white text-black px-6 py-3 text-base sm:text-lg md:text-xl rounded-xl 
            shadow-[inset_0_-4px_0_rgba(0,0,0,0.2),0_8px_0_0_rgba(0,0,0,0.2)]
            active:translate-y-[4px] active:shadow-[inset_0_-2px_0_rgba(0,0,0,0.2)]
            transition-all duration-150
          "
        >
          Contact Us
        </button>
      </motion.div>

      <motion.div
        className="mt-10 md:mt-0 md:absolute md:bottom-0 md:right-0 md:pr-16"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <img
          src="./hero.svg"
          alt="hero"
          className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[570px] h-auto mx-auto md:mx-0"
        />
      </motion.div>

      <motion.div
        className="mt-16 sm:mt-24 md:mt-40 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <img
          src="./brands.svg"
          alt="brands"
          className="w-full max-w-[540px] h-auto"
        />
      </motion.div>
    </div>
  );
}
