import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section relative">
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center">
        <motion.h1
          className="text-5xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="text-xl text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
         My name is Lior Solomon and I'm a Fullstack developer
        </motion.p>
        <motion.a
          href="#projects"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          View My Projects
        </motion.a>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-100 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
