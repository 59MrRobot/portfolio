import React from 'react';
import './Project.scss';
import { motion } from 'framer-motion';

interface Props {
  project: Project;
}

export const Project: React.FC<Props> = ({ project }) => {

  return (
    <motion.div 
      className="project"
      initial={{right: "-100%"}}
      animate={{right: 0}}
      transition={{duration: 1, ease: "easeInOut"}}
    >
      <img 
        src={`${process.env.PUBLIC_URL}/images/${project.thumbnail}`} alt="project thumbnail"
        className="project__image" 
      />
      <h2 className="project__title">{project.name}</h2>
      {/* <a 
        href={project.url} 
        target="_blank" 
        rel="noreferrer"
        className="project__link"
      >
        View
      </a> */}
    </motion.div>
  )
}
