"use client";
import { motion } from "framer-motion";

export default function Certification() {
  return (
    <div className="flex justify-center bg-[#1F2B68] py-24 px-4">
      <motion.div
        className="w-full max-w-[1170px] bg-gradient-to-br from-[#7795FD] to-[#4958CC] rounded-[40px] border-4 border-white px-6 md:px-16 py-14 flex flex-col md:flex-row items-center md:items-start justify-between text-white gap-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-[48px] font-bold mb-6 md:mb-10">
            Certification
          </h1>
          <img
            src="./certification.svg"
            alt="Certification Icon"
            className="w-[260px] md:w-[381px] h-auto"
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-8 md:gap-10 max-w-full md:max-w-[450px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {["Amazon", "Google", "Facebook"].map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }}
            >
              <h2 className="text-xl md:text-2xl font-semibold">{company}</h2>
              <p className="text-sm md:text-base text-white/80 mt-1 leading-snug">
                We specialize in developing interactive, scalable,
                brand-oriented.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
