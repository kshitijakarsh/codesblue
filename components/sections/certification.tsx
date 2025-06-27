"use client";
import { motion } from "framer-motion";

export default function Certification() {
  return (
    <div className="flex justify-center bg-[#1F2B68] py-24 px-4">
      <motion.div
        className="w-full max-w-[1170px] h-[509px] bg-gradient-to-br from-[#7795FD] to-[#4958CC] rounded-[40px] border-4 border-white px-6 md:px-16 text-white flex flex-col md:flex-row items-center md:items-center gap-4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col ml-8 items-center md:items-start text-center md:text-left md:flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-[46px] font-semibold mb-6 leading-tight">
            Certification
          </h1>
          <img
            src="./certification.svg"
            alt="Certification Icon"
            className="w-[220px] md:w-[320px] h-auto"
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center gap-5 md:gap-6 md:flex-1 max-w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h2 className="text-[28px] font-semibold">Amazon</h2>
            <p className="text-[16px] text-white/80 mt-1 leading-snug">
              We specialize in developing interactive, scalable, brand-oriented.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <h2 className="text-[28px] font-semibold">Google</h2>
            <p className="text-[16px] text-white/80 mt-1 leading-snug">
              We specialize in developing interactive, scalable, brand-oriented.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <h2 className="text-[28px] font-semibold">Facebook</h2>
            <p className="text-[16px] text-white/80 mt-1 leading-snug">
              We specialize in developing interactive, scalable, brand-oriented.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
