"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Kumar",
    title: "Founder & CEO",
    company: "MealObox",
    quote:
      "Codesblue transformed our vision into a stunning food delivery app. Their React Native development was flawless, and the Figma designs were exactly what we needed to compete with the big players. Our user retention increased by 40% after launch.",
  },
  {
    name: "Marcus Rodriguez",
    title: "CTO",
    company: "TrackFit",
    quote:
      "The team's expertise in Next.js and mobile development helped us build a fitness tracking platform that users love. They delivered on time, stayed within budget, and the code quality was exceptional. Couldn't be happier with the results.",
  },
  {
    name: "Emily Thompson",
    title: "Product Manager",
    company: "EcoCart",
    quote:
      "Working with Codesblue was like having an extended team. They understood our sustainability-focused e-commerce vision and built a beautiful, conversion-optimized website. Our online sales grew 300% in the first quarter after launch.",
  },
  {
    name: "David Park",
    title: "Founder",
    company: "StudyPal",
    quote:
      "Their Figma design process was incredibly collaborative. They created an intuitive learning app interface that our beta users absolutely loved. The transition from design to React Native development was seamless.",
  },
  {
    name: "Jennifer Walsh",
    title: "Operations Director",
    company: "LocalBites",
    quote:
      "Codesblue didn't just build us a website - they built us a complete digital presence. The restaurant ordering system they created handles our peak hours perfectly, and the admin dashboard makes managing everything so much easier.",
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
                  Join the ranks of our satisfied clients
                  </h1>
                  <p className="text-[28px] font-light text-white mt-20">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-20 text-white">
                    <h1 className="text-[20px] font-semibold">{testimonial.name}</h1>
                    <h1 className="text-[16px] opacity-90">{testimonial.title}</h1>
                    <h1 className="text-[16px] font-medium">{testimonial.company}</h1>
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
              Join the ranks of our satisfied clients
              </h1>
              <p className="text-base mb-6 px-2">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="text-sm">
                <h1 className="font-semibold">{testimonial.name}</h1>
                <h1 className="opacity-90">{testimonial.title}</h1>
                <h1 className="font-medium">{testimonial.company}</h1>
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
