"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const titles = [
  "Full-Stack Software Developer",
  "Web & API Systems Engineer",
  "Enterprise Software Architect",
  "TypeScript & Django Specialist",
];

export function TypewriterTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-9 sm:h-11 flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={titles[index]}
          initial={{ y: 24, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -24, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 bg-clip-text text-transparent inline-block"
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
      <span className="w-0.5 h-6 ml-1.5 bg-indigo-600 animate-pulse rounded-full" />
    </div>
  );
}
