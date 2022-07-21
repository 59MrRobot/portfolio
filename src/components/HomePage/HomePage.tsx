import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import { motion } from 'framer-motion';

export const HomePage: React.FC = () => {
  return (
    <motion.div
      className="homepage"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 1}}
    >
      <div className="homepage__wrapper">
        <Link to="about" className="homepage__title-link">
          <motion.h1 
            className="homepage__title"
            whileHover={{
              left: "25%",
              transition: {duration: 0.5}
            }}
          >
            Swazi Kunene
          </motion.h1>
        </Link>

        <h2 className="homepage__subtitle">Junior Frontend Developer</h2>

        <Link 
          to="projects"
          className="homepage__link"
        >
          Projects
        </Link>
      </div>
    </motion.div>
  )
}
