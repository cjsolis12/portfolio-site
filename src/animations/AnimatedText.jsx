import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const AnimatedText = ({ text, className }) => {
  return (
    <motion.span
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.10, delay: 0.10 * index }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export { AnimatedText };
