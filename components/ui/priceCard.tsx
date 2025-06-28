"use client";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function PriceCard() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, responsive websites built with cutting-edge technologies for optimal performance and user experience.",
      services: [
        { name: "Frontend Development", detail: "React, Next.js, TypeScript" },
        { name: "Backend Development", detail: "Node.js, Express, MongoDB" },
        { name: "Full-Stack Solutions", detail: "End-to-end web applications" },
        {
          name: "E-commerce Platforms",
          detail: "Shopify, WooCommerce integration",
        },
        {
          name: "Performance Optimization",
          detail: "SEO & speed optimization",
        },
      ],
      gradient: false,
      popular: false,
    },
    {
      title: "App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      services: [
        { name: "iOS Development", detail: "Swift, SwiftUI native apps" },
        { name: "Android Development", detail: "Kotlin, Java native apps" },
        { name: "Cross-Platform Apps", detail: "React Native, Flutter" },
        { name: "UI/UX Integration", detail: "Seamless design implementation" },
        {
          name: "App Store Deployment",
          detail: "Launch & maintenance support",
        },
      ],
      gradient: true,
      popular: true,
    },
    {
      title: "Figma Design",
      description:
        "Professional UI/UX design services using Figma to create stunning, user-centered digital experiences.",
      services: [
        { name: "UI/UX Design", detail: "Complete interface design" },
        { name: "Prototyping", detail: "Interactive mockups & flows" },
        { name: "Design Systems", detail: "Scalable component libraries" },
        { name: "Wireframing", detail: "User journey mapping" },
        { name: "Responsive Design", detail: "Mobile-first approach" },
      ],
      gradient: false,
      popular: false,
    },
  ];

  return (
    <div className="bg-[#1F2B68] py-12 lg:py-16 px-4 md:px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center items-stretch gap-4 lg:gap-6 max-w-6xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            custom={index}
            className={`relative w-full sm:w-[320px] lg:w-[350px] rounded-2xl p-6 text-white flex flex-col justify-between shadow-2xl border transition-colors duration-200 ${
              service.gradient
                ? "bg-gradient-to-br from-[#7796FD] to-[#4958CC] border-white/30 transform lg:scale-105"
                : "bg-[#183282] border-white/20 hover:border-white/40"
            }`}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
            }}
          >
            {service.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-[#F98C05] to-[#FF6B35] text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl lg:text-2xl font-bold mb-3 leading-tight">
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  service.gradient ? "text-white/95" : "text-white/80"
                }`}
              >
                {service.description}
              </p>
            </div>

            <div className="space-y-3 mb-6 flex-grow">
              {service.services.map((item, idx) => (
                <div
                  key={idx}
                  className={`group flex items-start gap-3 p-2.5 rounded-xl cursor-pointer transition-all duration-200 ${
                    service.gradient
                      ? "hover:bg-white/10 border-b border-white/20"
                      : "hover:bg-white/5 border-b border-white/10"
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full mt-2 ${
                      service.gradient
                        ? "bg-white"
                        : "bg-gradient-to-r from-[#F98C05] to-[#FF6B35]"
                    }`}
                  ></div>
                  <div className="flex-1">
                    <p className="font-semibold text-white group-hover:text-white transition-colors text-sm">
                      {item.name}
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        service.gradient ? "text-white/70" : "text-white/60"
                      }`}
                    >
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className={`w-full py-3 rounded-xl font-bold text-base transition-all duration-200 hover:shadow-lg ${
                service.gradient
                  ? "bg-white text-[#4958CC] hover:bg-white/90"
                  : "bg-gradient-to-r from-[#F98C05] to-[#FF6B35] text-white hover:shadow-xl"
              }`}
            >
              {service.gradient ? "Get Started Now" : "Learn More"}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
