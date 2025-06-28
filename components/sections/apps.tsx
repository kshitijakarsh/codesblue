"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Apps() {
  const apps = [
    {
      src: "/Mealbox.png",
      alt: "MealOBox - Food Delivery App",
      title: "MealOBox",
      description: "Tiffin Service App",
      width: 156,
    },
    {
      src: "/crypto.png",
      alt: "Crypto Trading Platform",
      title: "CryptoTrader",
      description: "Trading Platform",
      width: 160,
    },
    {
      src: "/tracker.png",
      alt: "Fitness Tracker App",
      title: "FitTracker",
      description: "Health & Fitness",
      width: 156,
    },
    {
      src: "/trade.png",
      alt: "Trading Dashboard",
      title: "TradePro",
      description: "Investment Platform",
      width: 160,
    },
  ];

  return (
    <div className="bg-[#1F2B68] py-20 px-4 text-white relative overflow-hidden">
      <div className="relative z-10 flex justify-center">
        <div className="w-[1100px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
              Apps We Built
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Showcasing our mobile application expertise across various
              industries
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex gap-8 justify-center flex-wrap perspective-1000"
          >
            {apps.map((app, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
                whileHover={{
                  y: -20,
                  rotateY: 5,
                  scale: 1.05,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
              >
                <div className="relative w-[240px] h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl transform-gpu transition-all duration-500 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-sm border border-white/20"></div>

                  <div className="relative w-full h-full">
                    <Image
                      src="https://i.pinimg.com/736x/6e/b8/eb/6eb8eb82a2ac5ebc3911c0d9a0b15cf0.jpg"
                      alt="Phone mockup background"
                      width={240}
                      height={500}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>

                  <motion.div className="absolute inset-0 mr-1 -mt-11 flex items-center justify-center p-4">
                    <div className="relative">
                      <Image
                        src={app.src}
                        alt={app.alt}
                        width={app.width}
                        height={430}
                        className="object-contain rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl"
                      />

                      <div className="absolute -inset-1 bg-gradient-to-r from-[#F98C05] to-[#FF6B35] rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#183282] to-[#1F2B68] rounded-xl px-4 py-2 border border-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  <h3 className="text-sm font-bold text-white">{app.title}</h3>
                  <p className="text-xs text-white/70">{app.description}</p>
                </motion.div>

                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F98C05]/0 via-[#FF6B35]/5 to-[#F98C05]/0 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              className="bg-gradient-to-r from-[#F98C05] to-[#FF6B35] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{
                boxShadow: "0 20px 40px rgba(249, 140, 5, 0.3)",
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
