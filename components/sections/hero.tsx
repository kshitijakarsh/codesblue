"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative bg-[#1F2B68] text-white min-h-screen px-4 sm:px-6 md:pl-28 overflow-hidden font-sans">
      <motion.div
        className="pt-10 md:pt-28 w-full"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="mb-4"
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src="arrow.svg" alt="arrow" className="w-18" />
        </motion.div>

        <h1 className="hidden md:block font-semibold text-[52px] lg:text-[80px] xl:text-[88px] leading-[1.1] max-w-5xl">
          <span>
            Your <span className="text-orange-400">Brand</span>, Reimagined
          </span>
          <br />
          <span>
            For <span className="text-orange-400">Digital Impact</span>
          </span>
        </h1>

        <h1 className="md:hidden block text-[34px] sm:text-[42px] font-semibold leading-[1.2]">
          Your <span className="text-orange-400">Brand</span>, Reimagined
          <br />
          For <span className="text-orange-400">Digital Impact</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="max-w-full sm:max-w-[480px] mt-6 sm:mt-10 text-base sm:text-lg md:text-[20px] leading-relaxed font-normal">
          Experience bespoke web development and captivating design that
          elevates your brand and drives genuine online growth.
        </p>
      </motion.div>

      <motion.div
        className="mt-8 sm:mt-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      >
        <button
          className="bg-white text-black px-6 py-3 text-base sm:text-lg md:text-xl rounded-xl 
            shadow-[inset_0_-4px_0_rgba(0,0,0,0.2),0_8px_0_0_rgba(0,0,0,0.2)]
            active:translate-y-[4px] active:shadow-[inset_0_-2px_0_rgba(0,0,0,0.2)]
            transition-all duration-150 font-semibold"
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
        className="hidden md:block absolute bottom-0 left-20 p-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <img
          src="./brands.svg"
          alt="brands"
          className="w-full max-w-[300px] sm:max-w-[400px] h-auto"
        />
      </motion.div>

      <motion.div
        className="mt-16 sm:mt-24 md:hidden flex justify-center"
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
