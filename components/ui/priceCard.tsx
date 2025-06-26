"use client";
import { motion } from "framer-motion";

export default function PriceCard() {
  return (
    <div className="flex justify-center items-end bg-[#1F2B68] gap-6 py-24">
      <motion.div
        className="w-[374px] h-[372px] bg-[#183282] border border-white rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.03 }}
      >
        <div>
          <h1 className="text-2xl font-semibold mb-2">Web Development</h1>
          <p className="text-sm text-gray-200">
            We specialize in developing interactive and conversion-focused
            websites.
          </p>
        </div>
        <div className="mt-6 space-y-3">
          {[
            "01 Visibility",
            "02 Identity",
            "03 Messaging",
            "04 Value Proposition",
            "05 CRO",
          ].map((item, index) => (
            <h1
              key={index}
              className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer"
            >
              {item}
            </h1>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="w-[374px] h-[432px] bg-gradient-to-b from-[#7796FD] to-[#4958CC] border border-white rounded-2xl p-6 flex flex-col justify-between shadow-lg text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
      >
        <div>
          <h1 className="text-2xl font-semibold mb-2">Web Design</h1>
          <p className="text-sm text-gray-200">
            We specialize in developing interactive experiences.
          </p>
        </div>
        <div className="mt-6 space-y-3">
          {[
            "01 UI/UX",
            "02 Landing Pages",
            "03 Redesigns",
            "04 Functionality",
            "05 Optimization",
          ].map((item, index) => (
            <h1
              key={index}
              className="border-b border-gray-100 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer"
            >
              {item}
            </h1>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="w-[374px] h-[372px] bg-[#183282] border border-white rounded-2xl p-6 flex flex-col justify-between shadow-lg text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.03 }}
      >
        <div>
          <h1 className="text-2xl font-semibold mb-2">E-commerce</h1>
          <p className="text-sm text-gray-200">
            Developing interactive, scalable, brand-oriented platforms.
          </p>
        </div>
        <div className="mt-6 space-y-3">
          {[
            "01 3D Animation",
            "02 Socials",
            "03 Paid Ads",
            "04 On-Page",
            "05 Technical",
          ].map((item, index) => (
            <h1
              key={index}
              className="border-b border-gray-400 pb-1 hover:text-yellow-300 transition duration-200 cursor-pointer"
            >
              {item}
            </h1>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
