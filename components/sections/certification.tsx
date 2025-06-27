"use client";
import { motion } from "framer-motion";

export default function Certification() {
  return (
    <div className="flex justify-center bg-[#1F2B68] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-6xl bg-gradient-to-br from-[#7795FD] to-[#4958CC] rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[40px] border-2 sm:border-3 lg:border-4 border-white p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 text-white flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 min-h-[500px] sm:min-h-[550px] md:min-h-[600px] lg:min-h-[509px]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col gap-6 text-left flex-1 order-2 lg:order-1 lg:pl-4 xl:pl-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="ml-10 mb-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[46px] font-semibold leading-tight">
            Certification
          </h1>
          <div className="flex justify-center lg:justify-start">
            <img
              src="./certification.svg"
              alt="Certification Icon"
              className="w-48 ml-10 sm:w-32 md:w-40 lg:w-48 xl:w-56 2xl:w-[320px] h-auto max-w-full"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center lg:items-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 flex-1 w-full order-1 lg:order-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="text-center lg:text-left px-2 sm:px-0 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[28px] font-semibold mb-1 sm:mb-2">
              Amazon
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-white/80 leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
              We specialize in developing interactive, scalable, brand-oriented
              solutions for modern businesses.
            </p>
          </motion.div>

          <motion.div
            className="text-center lg:text-left px-2 sm:px-0 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[28px] font-semibold mb-1 sm:mb-2">
              Google
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-white/80 leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
              We specialize in developing interactive, scalable, brand-oriented
              solutions for modern businesses.
            </p>
          </motion.div>

          <motion.div
            className="text-center lg:text-left px-2 sm:px-0 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[28px] font-semibold mb-1 sm:mb-2">
              Facebook
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-white/80 leading-relaxed max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
              We specialize in developing interactive, scalable, brand-oriented
              solutions for modern businesses.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
