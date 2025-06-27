"use client";
import { motion } from "framer-motion";

export default function Certification() {
  return (
    <div className="flex justify-center bg-[#1F2B68] py-10 px-5">
      <motion.div
        className="lg:hidden w-full max-w-3xl bg-gradient-to-br from-[#7795FD] to-[#4958CC] rounded-2xl border-2 border-white p-6 text-white flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-semibold">Certification</h1>
        <img
          src="./certification.svg"
          alt="Certification Icon"
          className="w-32"
        />


        <div className="text-center border-t pt-6">
          <h2 className="text-2xl font-semibold mb-1">Amazon</h2>
          <p className="text-white/80 text-sm max-w-xs">
            We specialize in developing interactive, scalable, brand-oriented
            solutions for modern businesses.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-1">Google</h2>
          <p className="text-white/80 text-sm max-w-xs">
            We specialize in developing interactive, scalable, brand-oriented
            solutions for modern businesses.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-1">Facebook</h2>
          <p className="text-white/80 text-sm max-w-xs">
            We specialize in developing interactive, scalable, brand-oriented
            solutions for modern businesses.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:flex w-full max-w-6xl bg-gradient-to-br from-[#7795FD] to-[#4958CC] rounded-[40px] border-4 border-white p-12 text-white gap-10 min-h-[509px]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col gap-6 text-left flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-semibold ml-10 mt-24 mb-8">Certification</h1>
          <div className="flex justify-start ml-10">
            <img
              src="./certification.svg"
              alt="Certification Icon"
              className="w-64 h-auto"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-start gap-6 flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h2 className="text-3xl font-semibold mb-2">Amazon</h2>
            <p className="text-lg text-white/80 max-w-lg">
              We specialize in developing interactive, scalable, brand-oriented
              solutions for modern businesses.
            </p>
          </motion.div>

          <motion.div
            className="text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <h2 className="text-3xl font-semibold mb-2">Google</h2>
            <p className="text-lg text-white/80 max-w-lg">
              We specialize in developing interactive, scalable, brand-oriented
              solutions for modern businesses.
            </p>
          </motion.div>

          <motion.div
            className="text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <h2 className="text-3xl font-semibold mb-2">Facebook</h2>
            <p className="text-lg text-white/80 max-w-lg">
              We specialize in developing interactive, scalable, brand-oriented
              solutions for modern businesses.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}