import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="about-section py-20 text-gray-800">
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
         Full-stack developer with QA experience. Skilled in developing desktop applications with WPF C# and .NET,
building robust servers with Node.js, Express, and MongoDB, and enhancing browser functionality through
Chrome extensions. Proficient in developing web applications using React.
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
