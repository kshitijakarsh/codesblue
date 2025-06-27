"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggeredVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Features() {
  return (
    <div className="bg-[#1F2B68] py-20 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Elevate Your{" "}
              <span className="text-transparent bg-gradient-to-r from-[#F98C05] to-[#FF6B35] bg-clip-text">
                Brand Online
              </span>
            </h2>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Create powerful, conversion-focused digital experiences with our
            custom web solutions and compelling design approach.
          </motion.p>

          <motion.div
            variants={staggeredVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              "Lightning-fast development and delivery",
              "100% custom design tailored to your brand",
              "Conversion-optimized user experiences",
              "Ongoing support and maintenance",
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={childVariants}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-[#F98C05] to-[#FF6B35] rounded-full"></div>
                <p className="text-white/80 text-base">{feature}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-gradient-to-r from-[#F98C05] to-[#FF6B35] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>

          <motion.div
            variants={staggeredVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pt-6"
          >
            <motion.div
              variants={childVariants}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
                  "https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2",
                  "https://images.unsplash.com/photo-1640951613773-54706e06851d",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Client ${i + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white/20 object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="text-white font-semibold text-lg">500+</p>
                <p className="text-white/70 text-sm">Successful Projects</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Image
              src="/features.svg"
              alt="Professional Web Development Services"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
