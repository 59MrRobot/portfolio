import React from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import Pdf from './Swazi_Kunene_CV.pdf';

const techStack = ['React', 'TypeScript', 'JavaScript', 'HTML', 'SCSS'];

export const About: React.FC = () => {
  return (
    <motion.div
      className="about"
      exit={{opacity: 0}}
    >
      <motion.div
        className="about__controls"
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

        <h1 className="about__title">Who Am I?</h1>

        <div></div>
      </motion.div>

      <div className="about__wrapper">
        <motion.ul 
          className="about__tech"
          initial={{left: "-100%"}}
          animate={{left: 0}}
          transition={{duration: 1, delay: 0.5}}
        >
          {techStack.map(tech => {
            return (
              <li key={tech}>
                {tech}
              </li>
            );
          })}
        </motion.ul>

        <div className="about__text-container">
          <motion.p 
            className="about__text about__text-large"
            initial={{right: "-100%"}}
            animate={{right: 0}}
            transition={{duration: 1}}
          >
            Hi, I'm Swazi. I'm a Junior Frontend Developer with 6 months of practical experience in Frontend Development.
          </motion.p>

          <motion.p
            className="about__text"
            initial={{right: "-100%"}}
            animate={{right: 0}}
            transition={{duration: 1, delay: 0.2}}
          >
            I'm a highly dedicated individual who's always trying to sharpen his skills and gain more knowledge.
          </motion.p>

          <motion.p
            className="about__text"
            initial={{right: "-100%"}}
            animate={{right: 0}}
            transition={{duration: 1, delay: 0.4}}
          >
            I am confident in my abilities to create dynamic web pages. I'm familiar with responsive web design, cross-browser, SASS pre-processor and BEM methodology. I'm able to work with RESTful API's - be it fetching, updating, deleting or posting data on the server.
          </motion.p>

          <motion.p
            className="about__text"
            initial={{right: "-100%"}}
            animate={{right: 0}}
            transition={{duration: 1, delay: 0.6}}
          >
            I also have some practical experience in creating dynamic React web applications and working with Rendering Lists, Forms (lifting state up), Classes, Functional Components, Contexts and React Router.
          </motion.p>

          <motion.p
            className="about__text about__text-small"
            initial={{right: "-100%"}}
            animate={{right: 0}}
            transition={{duration: 1, delay: 0.8}}
          >
            I am a huge consumer of music, I'd be lying if I said I didn't listen to it 24/7, and sometimes when I'm not building web pages, I'm making <a target="_blank" href="https://soundcloud.com/s_k_music" rel="noreferrer" className="link">my own music</a>, for myself. I'm also a huge football fan - my favourite club being Arsenal FC.
          </motion.p>
        </div>

        <motion.a 
          href={require('./Swazi_Kunene_CV.pdf')}
          target="_blank"
          className="link about__cv"
          initial={{right: "-100%"}}
          animate={{right: 0}}
          transition={{duration: 1, delay: 1}}
        >
          My CV (pdf 46kb)
        </motion.a>
      </div>
    </motion.div>
  )
}
