"use client";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="bg-[#1F2B68] py-20 px-4">
      <div className="max-w-[660px] mx-auto text-4xl md:text-6xl text-center text-white leading-tight px-2">
        <h1 className="text-[54px] font-semibold">Comprised of diverse minds</h1>
      </div>

      <div className="mt-16 flex justify-center items-center">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-4 items-start">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="./gemini.svg"
              alt="project1"
              className="w-full h-auto max-w-[646px] max-h-[508px] object-contain"
            />
            <h1 className="text-white text-2xl font-bold mt-5">
              GEMINI SKINCARE
            </h1>
            <div className="flex flex-wrap gap-3 mt-4">
              {["Copywriting", "Brand Content", "E-Commerce"].map((tag, i) => (
                <motion.h1
                  key={i}
                  className="bg-white text-[#1F2B68] px-3 py-1 rounded-full text-sm font-medium shadow-sm border border-gray-200"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tag}
                </motion.h1>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="./silv.svg"
              alt="project2"
              className="w-full h-auto max-w-[484px] max-h-[508px] object-contain"
            />
            <h1 className="text-white text-2xl font-bold mt-5">
              SILV PEANUT BUTTER
            </h1>
            <div className="flex flex-wrap gap-3 mt-4">
              {["Copywriting", "Brand Content", "E-Commerce"].map((tag, i) => (
                <motion.h1
                  key={i}
                  className="bg-white text-[#1F2B68] px-3 py-1 rounded-full text-sm font-medium shadow-sm border border-gray-200"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tag}
                </motion.h1>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-16 flex justify-center items-center">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-4 items-start">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="./pizza.svg"
              alt="project1"
              className="w-full h-auto max-w-[484px] max-h-[508px] object-contain"
            />
            <h1 className="text-white text-2xl font-bold mt-5">
              GOODROOT PIZZA
            </h1>
            <div className="flex flex-wrap gap-3 mt-4">
              {["Copywriting", "Brand Content", "E-Commerce"].map((tag, i) => (
                <motion.h1
                  key={i}
                  className="bg-white text-[#1F2B68] px-3 py-1 rounded-full text-sm font-medium shadow-sm border border-gray-200"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tag}
                </motion.h1>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="./olipop.svg"
              alt="project2"
              className="w-full h-auto max-w-[646px] max-h-[508px] object-contain"
            />
            <h1 className="text-white text-2xl font-bold mt-5">
              OLIPOP DRINKS
            </h1>
            <div className="flex flex-wrap gap-3 mt-4">
              {["Copywriting", "Brand Content", "E-Commerce"].map((tag, i) => (
                <motion.h1
                  key={i}
                  className="bg-white text-[#1F2B68] px-3 py-1 rounded-full text-sm font-medium shadow-sm border border-gray-200"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tag}
                </motion.h1>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="text-center pt-15 mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="py-4 px-6 rounded-xl bg-gradient-to-r from-[#FF9A63] to-[#FE804B] text-white transition-transform duration-200"
        >
          See all Projects
        </motion.button>
      </div>
    </div>
  );
}
