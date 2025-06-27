"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Floyd Miles",
    company: "The Walt Disney Company",
    quote:
      "I was very satisfied with my decision to work with Zorro on building the website for my brand, Gemini Skincare. They did a great job putting the site together in a timely fashion. Jon & team are extremely detail-oriented and were open to feedback.",
  },
  {
    name: "Leslie Alexander",
    company: "Amazon",
    quote:
      "Zorro's design team is truly exceptional. They delivered a stunning platform that not only looks great but also performs smoothly. Their responsiveness and professionalism were top-notch.",
  },
  {
    name: "Cameron Williamson",
    company: "Google",
    quote:
      "Working with Zorro felt like having an in-house team. They understood our vision and brought it to life with creativity and precision. Highly recommend them for any digital design project.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const testimonial = testimonials[index];

  return (
    <div className="bg-[#1F2B68] py-20 px-4 flex justify-center items-center">
      <div className="w-full max-w-[1170px]">
        <div className="hidden lg:flex bg-gradient-to-r from-[#FF9A63] to-[#FE804B] rounded-[40px] border-[6px] border-white px-6 py-12">
          <div className="flex ml-24 mt-14 gap-10">
            <div className="w-[674px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                >
                  <h1 className="text-[58px] leading-[1] text-white font-bold">
                    Passion for creating digital experiences
                  </h1>
                  <p className="text-[28px] font-light text-white mt-20">
                    {testimonial.quote}
                  </p>
                  <div className="mt-20 text-white">
                    <h1 className="text-[20px]">{testimonial.name}</h1>
                    <h1 className="text-[16px]">{testimonial.company}</h1>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center ml-10">
              <div className="flex flex-col justify-between items-center h-full text-white mt-40">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-quote-icon"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                >
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                </motion.svg>

                <div className="flex gap-10 justify-center pb-22">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer"
                    whileHover={{ x: -4, scale: 1.1 }}
                    onClick={prev}
                  >
                    <path d="M6 8L2 12L6 16" />
                    <path d="M2 12H22" />
                  </motion.svg>

                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer"
                    whileHover={{ x: 4, scale: 1.1 }}
                    onClick={next}
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </motion.svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden bg-gradient-to-r from-[#FF9A63] to-[#FE804B] rounded-[40px] border-[6px] border-white px-6 py-10 flex flex-col items-center text-white relative">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute top-6 right-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
            <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
          </motion.svg>

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center mt-15"
            >
              <h1 className="text-3xl font-bold mb-6">
                Passion for creating digital experiences
              </h1>
              <p className="text-base mb-6 px-2">{testimonial.quote}</p>
              <div className="text-sm">
                <h1>{testimonial.name}</h1>
                <h1>{testimonial.company}</h1>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-10 justify-center mt-10">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
              whileHover={{ x: -4, scale: 1.1 }}
              onClick={prev}
            >
              <path d="M6 8L2 12L6 16" />
              <path d="M2 12H22" />
            </motion.svg>

            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
              whileHover={{ x: 4, scale: 1.1 }}
              onClick={next}
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </motion.svg>
          </div>
        </div>
      </div>
    </div>
  );
}
