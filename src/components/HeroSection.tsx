import React from 'react';
import { motion } from 'framer-motion';

const typingAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.05,
    },
  },
};

const characterAnimation = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  const title = "Welcome to My Portfolio";
  const description = "I am a passionate developer creating awesome web applications.";

  return (
    <section id="home" className="hero-section">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={typingAnimation}
        >
          {title.split("").map((char, index) => (
            <motion.span key={index} variants={characterAnimation}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {description}
        </motion.p>
        <motion.a
          href="#projects"
          className=""
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Projects
        </motion.a>
    </section>
  );
};

export default HeroSection;
