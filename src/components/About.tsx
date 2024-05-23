import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="about-section py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi! I'm a passionate developer with a knack for creating engaging web applications.
          With a strong foundation in front-end technologies and a keen eye for design, I strive
          to build user-friendly and visually appealing projects. Let's make something great together!
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            View My Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
