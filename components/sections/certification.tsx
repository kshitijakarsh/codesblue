"use client";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
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
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function Certification() {
  return (
    <div className="flex justify-center bg-[#1F2B68] py-10 px-5">
      <motion.div
        className="lg:hidden w-full max-w-3xl bg-gradient-to-br from-[#7795FD] to-[#4958CC] rounded-2xl border-2 border-white p-6 text-white flex flex-col items-center gap-6 will-change-transform"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          className="text-3xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Professional Certifications
        </motion.h1>

        <motion.img
          src="/certification.svg"
          alt="Professional Certification Badge"
          className="w-32"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <motion.div
          variants={staggeredVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full"
        >
          <motion.div
            variants={childVariants}
            className="text-center border-t pt-6"
          >
            <h2 className="text-2xl font-semibold mb-1">AWS Certified</h2>
            <p className="text-white/80 text-sm max-w-xs mx-auto">
              Amazon Web Services certified for cloud infrastructure and
              scalable application deployment.
            </p>
          </motion.div>

          <motion.div variants={childVariants} className="text-center">
            <h2 className="text-2xl font-semibold mb-1">Google Cloud</h2>
            <p className="text-white/80 text-sm max-w-xs mx-auto">
              Google Cloud Platform expertise in modern application development
              and deployment.
            </p>
          </motion.div>

          <motion.div variants={childVariants} className="text-center">
            <h2 className="text-2xl font-semibold mb-1">Meta Business</h2>
            <p className="text-white/80 text-sm max-w-xs mx-auto">
              Meta certified for social media integration and digital marketing
              solutions.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden lg:flex w-full max-w-6xl bg-gradient-to-br from-[#7795FD] to-[#4958CC] rounded-[40px] border-4 border-white p-12 text-white gap-10 min-h-[509px] will-change-transform"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex flex-col gap-6 text-left flex-1"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-semibold ml-10 mt-24 mb-8">
            Professional Certifications
          </h1>
          <div className="flex justify-start ml-10">
            <motion.img
              src="/certification.svg"
              alt="Professional Certification Badge"
              className="w-64 h-auto"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-start gap-6 flex-1"
          variants={staggeredVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={childVariants}
            className="text-left p-4 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            <h2 className="text-3xl font-semibold mb-2">AWS Certified</h2>
            <p className="text-lg text-white/80 max-w-lg">
              Amazon Web Services certified for cloud infrastructure, serverless
              architecture, and scalable application deployment.
            </p>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="text-left p-4 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            <h2 className="text-3xl font-semibold mb-2">
              Google Cloud Platform
            </h2>
            <p className="text-lg text-white/80 max-w-lg">
              Google Cloud Platform expertise in modern application development,
              AI/ML integration, and enterprise solutions.
            </p>
          </motion.div>

          <motion.div
            variants={childVariants}
            className="text-left p-4 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            <h2 className="text-3xl font-semibold mb-2">
              Meta Business Partner
            </h2>
            <p className="text-lg text-white/80 max-w-lg">
              Meta certified for social media integration, advertising APIs, and
              comprehensive digital marketing solutions.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
