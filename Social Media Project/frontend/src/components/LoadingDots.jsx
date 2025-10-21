/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
const loaderContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const dotVariants = {
  start: {
    scale: [1, 1.5, 1],
    opacity: [0.5, 1, 0.5],
  },
  transition: {
    duration: 0.8,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop",
  },
};

const LoadingDots = () => (
  <motion.div
    className="loading-dots-container"
    variants={loaderContainerVariants}
    initial="start"
    animate="start"
  >
    {[...Array(9)].map((_, i) => (
      <motion.div
        key={i}
        className="loading-dot"
        variants={dotVariants}
        transition={dotVariants.transition}
      />
    ))}
  </motion.div>
);

export default LoadingDots;
