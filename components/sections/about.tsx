"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter({ end }: { end: number | string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const target =
      typeof end === "string" && end.includes("K")
        ? parseInt(end) * 1000
        : parseInt(end.toString());

    const step = Math.ceil(target / 60);

    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [end]);

  const display =
    typeof end === "string" && end.includes("K")
      ? `${Math.round(count / 1000)}K+`
      : count;

  return <h1 className="text-5xl md:text-7xl font-bold">{display}</h1>;
}

export default function About() {
  return (
    <div className="bg-[#1F2B68] py-35 px-4">
      <motion.div
        className="flex justify-center text-center text-white text-3xl md:text-5xl"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-[594px] font-semibold">
          <h1 className="text-[38px] md:text-[58px]">
            Strategic design over the years
          </h1>
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 mt-28 text-[#183282]">
        <motion.div
          className="w-full max-w-[272px] h-[208px] bg-white rounded-2xl flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Counter end={400} />
          <p className="text-lg mt-2 w-[200px]">
            Talented people ready to bring your vision
          </p>
        </motion.div>

        <motion.div
          className="w-full max-w-[272px] h-[208px] bg-white rounded-2xl flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Counter end={15} />
          <p className="text-lg mt-2 w-[200px]">
            Years of experience working with tech
          </p>
        </motion.div>

        <motion.div
          className="w-full max-w-[272px] h-[208px] bg-white rounded-2xl flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Counter end={40} />
          <p className="text-lg mt-2 w-[200px]">Offices in the United States</p>
        </motion.div>

        <motion.div
          className="w-full max-w-[272px] h-[208px] bg-white rounded-2xl flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Counter end={"3K+"} />
          <p className="text-lg mt-2 w-[200px]">
            Pixel perfect projects designed
          </p>
        </motion.div>
      </div>
    </div>
  );
}
