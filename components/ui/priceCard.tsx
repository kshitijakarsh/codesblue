"use client";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export default function PriceCard() {
  const services = [
    {
      title: "Web Development",
      description: "Custom-built, scalable websites that convert visitors into customers with cutting-edge technology.",
      services: [
        { name: "Frontend Development", detail: "React, Next.js, TypeScript" },
        { name: "Backend Architecture", detail: "Node.js, APIs, Databases" },
        { name: "Performance Optimization", detail: "Speed & SEO focused" },
        { name: "E-commerce Integration", detail: "Shopify, WooCommerce" },
        { name: "CMS Development", detail: "Headless & traditional" }
      ],
      gradient: false,
      popular: false
    },
    {
      title: "Complete Digital Solution",
      description: "Full-service design and development package for businesses ready to dominate online.",
      services: [
        { name: "UI/UX Design", detail: "User-centered design approach" },
        { name: "Brand Integration", detail: "Cohesive visual identity" },
        { name: "Conversion Optimization", detail: "Data-driven improvements" },
        { name: "Mobile-First Design", detail: "Responsive across all devices" },
        { name: "Analytics Setup", detail: "Track and measure success" }
      ],
      gradient: true,
      popular: true
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing solutions that amplify your brand and drive measurable business growth.",
      services: [
        { name: "SEO Optimization", detail: "Rank higher in search results" },
        { name: "Content Strategy", detail: "Engaging, conversion-focused copy" },
        { name: "Social Media Integration", detail: "Multi-platform presence" },
        { name: "Performance Analytics", detail: "ROI tracking & reporting" },
        { name: "Growth Strategy", detail: "Long-term scalability planning" }
      ],
      gradient: false,
      popular: false
    }
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
            viewport={{ once: true }}
            className={`relative w-full sm:w-[320px] lg:w-[350px] rounded-2xl p-6 text-white flex flex-col justify-between shadow-2xl border transition-all duration-300 ${
              service.gradient 
                ? 'bg-gradient-to-br from-[#7796FD] to-[#4958CC] border-white/30 transform lg:scale-105' 
                : 'bg-[#183282] border-white/20 hover:border-white/40'
            }`}
            whileHover={{ 
              scale: service.gradient ? 1.02 : 1.03,
              y: -5
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
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
              <p className={`text-sm leading-relaxed ${
                service.gradient ? 'text-white/95' : 'text-white/80'
              }`}>
                {service.description}
              </p>
            </div>

            <div className="space-y-3 mb-6 flex-grow">
              {service.services.map((item, idx) => (
                <motion.div
                  key={idx}
                  className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                    service.gradient 
                      ? 'hover:bg-white/10 border-b border-white/20' 
                      : 'hover:bg-white/5 border-b border-white/10'
                  }`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                    service.gradient 
                      ? 'bg-white' 
                      : 'bg-gradient-to-r from-[#F98C05] to-[#FF6B35]'
                  }`}></div>
                  <div className="flex-1">
                    <p className="font-semibold text-white group-hover:text-white transition-colors text-sm">
                      {item.name}
                    </p>
                    <p className={`text-xs mt-1 ${
                      service.gradient ? 'text-white/70' : 'text-white/60'
                    }`}>
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className={`w-full py-3 rounded-xl font-bold text-base transition-all duration-300 ${
                service.gradient
                  ? 'bg-white text-[#4958CC] hover:bg-white/90 shadow-lg'
                  : 'bg-gradient-to-r from-[#F98C05] to-[#FF6B35] text-white hover:shadow-xl'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {service.gradient ? "Get Started Now" : "Learn More"}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
