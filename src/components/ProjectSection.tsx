import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Olympics from "../assets/Olympics.png";
import Companies from "../assets/Companies.png";
import LightOut from "../assets/lights-out game.png";

const projects = [
  {
    title: "Olympics",
    description:
      "Interactive Olympics project showcasing animations and sliders. Built with React, framer-motion, and styled-components.",
    image: Olympics,
    liveLink: "https://lior3796.github.io/olympics/",
    sourceLink: "https://github.com/Lior3796/olympics",
  },
  {
    title: "Companies",
    description:
      "Home-assignment to filter companies by score with pagination. Developed using React TS, Firebase, and Hooks.",
    image: Companies,
    liveLink: "https://companies-app.web.app/",
    sourceLink: "https://github.com/Lior3796/companies-app",
  },
  {
    title: "Lights-out Game",
    description:
      "A simple yet engaging Lights-out game. Implemented with React for interactive gameplay.",
    image: LightOut,
    liveLink: "https://lior3796.github.io/lights-out-game/",
    sourceLink: "https://github.com/Lior3796/lights-out-game",
  },
];
  export const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  }

const ProjectsSection = () => {
  return (
    <section id="projects" className="project-section">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.image}
              liveDemoUrl={project.liveLink}
              sourceCodeUrl={project.sourceLink}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
