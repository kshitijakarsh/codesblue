"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <motion.div
        className="bg-[#1F2B68] flex justify-center text-center text-5xl text-white"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-[594px] mt-10">
          <h1>Strategic design over the years</h1>
        </div>
      </motion.div>

      <div className="flex justify-center items-end bg-[#1F2B68] gap-6 py-24 text-[#183282]">
        <motion.div
          className="w-[272px] h-[208px] bg-white rounded-2xl flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <h1 className="text-7xl font-bold ">400</h1>
          <p className="text-xl mt-2 w-[200px]">
            Talented people ready to bring your vision
          </p>
        </motion.div>

        <motion.div
          className="w-[272px] h-[208px] bg-white rounded-2xl flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-7xl font-bold">15</h1>
          <p className="text-xl mt-2 w-[200px]">
            Years of experience working with tech
          </p>
        </motion.div>

        <motion.div
          className="w-[272px] h-[208px] bg-white rounded-2xl flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className="text-7xl font-bold">40</h1>
          <p className="text-xl mt-2 w-[200px]">
            Offices in the United States
          </p>
        </motion.div>

        <motion.div
          className="w-[272px] h-[208px] bg-white rounded-2xl flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h1 className="text-7xl font-bold">3K+</h1>
          <p className="text-xl mt-2 w-[200px]">
            Pixel perfect projects designed
          </p>
        </motion.div>
      </div>
    </div>
  );
}
