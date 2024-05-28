import {motion} from "framer-motion";
import { variants } from './ProjectSection';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  liveDemoUrl: string;
  sourceCodeUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, liveDemoUrl, sourceCodeUrl }) => {
  return (
    <motion.div variants={variants} className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={liveDemoUrl}
          className="inline-block bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-semibold mr-2 mb-2"
        >
          Live Demo
        </a>
        <a
          href={sourceCodeUrl}
          className="inline-block bg-gray-800 text-white px-3 py-2 rounded-full text-sm font-semibold mb-2"
        >
          Source Code
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
