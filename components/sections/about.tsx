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
          <Counter end={8} />
          <p className="text-lg mt-2 w-[200px]">
            Skilled developers ready to bring your vision
          </p>
        </motion.div>

        <motion.div
          className="w-full max-w-[272px] h-[208px] bg-white rounded-2xl flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Counter end={3} />
          <p className="text-lg mt-2 w-[200px]">
            Years of combined experience in tech
          </p>
        </motion.div>

        <motion.div
          className="w-full max-w-[272px] h-[208px] bg-white rounded-2xl flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Counter end={2} />
          <p className="text-lg mt-2 w-[200px]">Locations serving clients nationwide</p>
        </motion.div>

        <motion.div
          className="w-full max-w-[272px] h-[208px] bg-white rounded-2xl flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Counter end={25} />
          <p className="text-lg mt-2 w-[200px]">
            Successful projects completed
          </p>
        </motion.div>
      </div>
    </div>
  );
}
