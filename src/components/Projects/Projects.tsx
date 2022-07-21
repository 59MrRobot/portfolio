import React from 'react';
import { ProjectsList } from '../ProjectsList';
import './Projects.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    name: 'MyBiKE Landing Page',
    url: 'https://59mrrobot.github.io/mybike-landing-page/',
    thumbnail: 'mybike.png',
  },
  {
    name: 'Kickstarter Landing Page',
    url: 'https://59mrrobot.github.io/kickstarter-landing-page/',
    thumbnail: 'kickstarter.png',
  },
  {
    name: 'React Wordle',
    url: 'https://59mrrobot.github.io/wordle-project/',
    thumbnail: 'wordle.png',
  },
];



export const Projects: React.FC = () => {
  return (
    <motion.div 
      className="projects"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 1}}
    >
      <motion.div 
        className="projects__controls"
        initial={{left: "-100%"}}
        animate={{left: 0}}
        transition={{duration: 1}}
      >
        <Link to="/">
          <img 
            src={`${process.env.PUBLIC_URL}/images/home.svg`} 
            alt="home icon"
            className="home-icon"
          />
        </Link>

        <h1 className="projects__title">Projects</h1>

        <div></div>
      </motion.div>

      <div className="projects__wrapper">
        <ProjectsList projects={projects} />
      </div>
    </motion.div>
  )
}
