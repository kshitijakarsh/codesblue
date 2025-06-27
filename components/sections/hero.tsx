"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { BiPhoneCall } from "react-icons/bi";

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <div className="relative bg-[#1F2B68] text-white min-h-screen overflow-hidden">
      <div className="px-4 sm:px-6 md:pl-28 pb-8 md:pb-0">
        <motion.div
          className="pt-10 md:pt-28 w-full"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >

          <motion.h1
            className="hidden md:block font-bold text-[56px] lg:text-[84px] xl:text-[96px] leading-[1.1] max-w-6xl tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="block">
              Your{" "}
              <span className="text-transparent bg-gradient-to-r from-[#F98C05] to-[#FF6B35] bg-clip-text font-extrabold">
                Brand
              </span>
              , Reimagined
            </span>

            <span className="block mt-2">
              <span className="flex items-center">
                <motion.div
                  className="mr-3 md:mr-4"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Image
                    src="/arrow.svg"
                    alt="arrow"
                    width={100}
                    height={100}
                    className="w-16 md:w-30 opacity-90"
                  />
                </motion.div>
                For {" "}
                <span className="ml-4 text-transparent bg-gradient-to-r from-[#F98C05] to-[#FF6B35] bg-clip-text font-extrabold">
                  Digital Impact
                </span>
              </span>
            </span>
          </motion.h1>

          <motion.h1
            className="md:hidden block text-[36px] sm:text-[42px] font-bold leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Your{" "}
            <span className="text-transparent bg-gradient-to-r from-[#F98C05] to-[#FF6B35] bg-clip-text">
              Brand
            </span>
            , Reimagined
            <br />
            For{" "}
            <span className="text-transparent bg-gradient-to-r from-[#F98C05] to-[#FF6B35] bg-clip-text">
              Digital Impact
            </span>
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="max-w-full sm:max-w-[520px] mt-6 sm:mt-8 md:mt-12 text-base sm:text-lg md:text-[22px] leading-relaxed font-normal text-white/90">
            Experience bespoke web development and captivating design that
            elevates your brand and drives genuine online growth.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 sm:mt-10 md:mt-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button
            className="flex items-center bg-white text-[#1F2B68] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg md:text-xl rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 will-change-transform"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <BiPhoneCall className="w-6 h-6 mr-2" />
            Book a Call
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-10 sm:mt-12 md:hidden flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.img
            src="./hero.svg"
            alt="Professional web development illustration"
            className="w-full max-w-[280px] sm:max-w-[320px] h-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="hidden md:block absolute bottom-0 right-0 pr-16"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.img
            src="./hero.svg"
            alt="Professional web development illustration"
            className="w-full max-w-[580px] h-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
