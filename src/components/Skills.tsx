import { motion } from 'framer-motion';
import reactLogo from '../assets/react.svg';
import html from '../assets/html.png';
import css from '../assets/css.png';
import nodeJs from '../assets/Nodejs.png';
import js from '../assets/js.png';
import express from '../assets/express-js.png';
import typescript from '../assets/typescript.png';
import mongodb from '../assets/mongo.png';


interface Skill {
  name: string;
  level: number;
  logo: string;
}

const skills: Skill[] = [
  { name: 'HTML', level: 80, logo: html },
  { name: 'CSS', level: 75, logo: css },
  { name: 'JS', level: 90, logo: js },
  { name: 'React', level: 90, logo: reactLogo },
  { name: 'Typescript', level: 80, logo: typescript },
  { name: 'NodeJs', level: 80, logo: nodeJs },
  { name: 'Express', level: 85, logo: express },
  { name: 'MongoDB', level: 85, logo: mongodb },
];

const Skills = () => {
  return (
    <section className="skills-section shape">
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
                    className="text-white-500"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
