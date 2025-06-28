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
      staggerChildren: 0.1,
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

export default function TechStack() {
  const techCategories = [
    {
      title: "Frontend",
      icon: "⚛️",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      title: "Mobile",
      icon: "📱",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"]
    },
    {
      title: "Design",
      icon: "🎨",
      technologies: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"]
    },
    {
      title: "Tools",
      icon: "🛠️",
      technologies: ["Git", "VS Code", "Docker", "AWS", "Vercel"]
    },
    {
      title: "Testing",
      icon: "🧪",
      technologies: ["Jest", "Cypress", "React Testing", "Postman", "Lighthouse"]
    }
  ];

  return (
    <div className="flex justify-center bg-[#1F2B68] py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
            Technologies We Use
          </h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Cutting-edge tools and frameworks that power our development process
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggeredVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              className="group bg-gradient-to-br from-[#7796FD]/20 to-[#4958CC]/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:from-[#7796FD]/30 hover:to-[#4958CC]/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="bg-gradient-to-r from-[#F98C05] to-[#FF6B35] text-white px-3 py-1.5 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#183282] to-[#1F2B68] rounded-2xl px-6 py-4 border border-white/20 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">Always Learning</span>
            </div>
            <span className="text-white/70">|</span>
            <span className="text-white/80">We stay updated with the latest technologies</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
