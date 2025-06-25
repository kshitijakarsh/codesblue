"use client";
import { motion } from "framer-motion";

export default function Certification() {
  return (
    <div className="flex justify-center bg-[#1F2B68] py-24 px-4">
      <motion.div
        className="w-[1170px] h-[509px] bg-gradient-to-br from-[#7795FD] to-[#4958CC] rounded-[40px] border-4 border-white px-16 py-14 flex items-center justify-between text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-start"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[48px] font-bold mb-10">Certification</h1>
          <img
            src="./certification.svg"
            alt="Certification Icon"
            className="w-[381px] h-[215px]"
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-10 max-w-[450px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold">Amazon</h2>
            <p className="text-base text-white/80 mt-1 leading-snug">
              We specialize in developing interactive, scalable, brand-oriented.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold">Google</h2>
            <p className="text-base text-white/80 mt-1 leading-snug">
              We specialize in developing interactive, scalable, brand-oriented.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <h2 className="text-2xl font-semibold">Facebook</h2>
            <p className="text-base text-white/80 mt-1 leading-snug">
              We specialize in developing interactive, scalable, brand-oriented.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
