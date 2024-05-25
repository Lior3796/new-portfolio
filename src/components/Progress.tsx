import React from 'react';
import { motion } from 'framer-motion';
import reactLogo from '../assets/react.svg';

interface Skill {
  name: string;
  level: number;
  logo: string;
}

const skills: Skill[] = [
  { name: 'HTML', level: 95, logo: reactLogo },
  { name: 'CSS', level: 85, logo: reactLogo },
  { name: 'JS', level: 90, logo: reactLogo },
  { name: 'React', level: 90, logo: reactLogo },
  { name: 'WPF', level: 70, logo: reactLogo },
  { name: 'NodeJs', level: 80, logo: reactLogo },
  { name: 'MongoDB', level: 75, logo: reactLogo },
  { name: 'Express', level: 75, logo: reactLogo },
];

const SkillsComponent = () => {
  return (
    <section className="skills-section shape py-20 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <svg className="w-24 h-24">
                  <circle
                    className="text-gray-300"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="transparent"
                    r="36"
                    cx="50%"
                    cy="50%"
                  />
                  <motion.circle
                    className="text-blue-500"
                    strokeWidth="4"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="36"
                    cx="50%"
                    cy="50%"
                    initial={{ strokeDasharray: 0, strokeDashoffset: 0 }}
                    animate={{
                      strokeDasharray: 2 * Math.PI * 36,
                      strokeDashoffset: 2 * Math.PI * 36 * (1 - skill.level / 100),
                    }}
                    transition={{ duration: 1 }}
                  />
                </svg>
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{skill.name}</h3>
              <span className="text-sm font-semibold">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
