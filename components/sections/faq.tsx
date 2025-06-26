"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const mockFaqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer web design, app development, SEO, and digital branding services tailored to your business needs.",
  },
  {
    question: "How long does a project take?",
    answer:
      "The timeline depends on the scope, but typically a standard website takes 3–6 weeks from start to finish.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we offer ongoing maintenance and support packages to keep your product updated and secure.",
  },
  {
    question: "What’s your pricing model?",
    answer:
      "We offer both fixed and hourly pricing models depending on the type and scale of the project.",
  },
  {
    question: "Can you work with international clients?",
    answer:
      "Absolutely! We work with businesses around the world and accommodate different time zones and languages.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#1F2B68] py-20 px-6">
      <div className="flex flex-col md:flex-row justify-center gap-16 max-w-7xl mx-auto flex-wrap">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:max-w-[476px] mt-10 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
            Frequently Asked <br /> Questions
          </h2>
          <img
            src="./faq.svg"
            alt="faq_image"
            className="mt-12 mx-auto md:mx-0 w-[200px] md:w-[295px]"
          />
        </motion.div>

        <div className="w-full md:max-w-[575px]">
          {mockFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-white py-4 border-b border-white/20"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left hover:opacity-90 transition"
              >
                <h3 className="text-lg md:text-xl font-medium">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-circle-chevron-down"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m16 10-4 4-4-4" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    className="mt-4 text-white/60 text-base"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-10 text-white/60 text-base md:w-[420px]"
          >
            Frankly, it's the best in the business and we'll back that up with
            references from our clients. Our trainers and operations teams offer
            support in multiple time zones and move at the speed of your
            business.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
