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

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[index];

  return (
    <div className="bg-[#1F2B68] w-full flex justify-center items-center py-20 px-4">
      <div className="bg-gradient-to-r from-[#FF9A63] to-[#FE804B] w-full max-w-[1170px] rounded-[40px] border-[6px] border-white px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Text content */}
          <div className="w-full max-w-[674px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-6xl text-white font-bold leading-tight">
                  Passion for creating digital experiences
                </h1>
                <p className="text-lg sm:text-xl lg:text-3xl text-white mt-10 lg:mt-20">
                  {testimonial.quote}
                </p>
                <div className="mt-10 lg:mt-20 text-white">
                  <h1>{testimonial.name}</h1>
                  <h1>{testimonial.company}</h1>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quote Icon & Controls */}
          <div className="flex flex-col items-center justify-center mt-10 lg:mt-40 text-white">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
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

            <div className="flex gap-10 justify-center mt-10 lg:mt-40 pb-4">
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
  );
}
