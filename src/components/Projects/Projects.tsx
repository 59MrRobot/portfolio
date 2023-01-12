import React, { useEffect, useRef } from 'react';
import { ProjectsList } from '../ProjectsList';
import './Projects.scss';
import { Link } from 'react-router-dom';
import { gsap, Power3 } from "gsap";
import { Particles } from '../Particles';

const projects = [
  {
    name: 'Wordle',
    type: "App",
    url: 'https://59mrrobot.github.io/wordle-project/',
    thumbnail: 'wordle.png',
  },
  {
    name: 'Kickstarter',
    type: "Landing Page",
    url: 'https://59mrrobot.github.io/kickstarter-landing-page/',
    thumbnail: 'kickstarter.png',
  },
  {
    name: 'MyBiKE',
    type: "Landing Page",
    url: 'https://59mrrobot.github.io/mybike-landing-page/',
    thumbnail: 'mybike.png',
  },
  {
    name: 'Tic Tac Toe',
    type: "App",
    url: 'https://59mrrobot.github.io/tic-tac-toe/',
    thumbnail: 'tictactoe.PNG',
  },
  {
    name: 'Currency Converter',
    type: "App",
    url: 'https://59mrrobot.github.io/currency-converter/',
    thumbnail: 'currency-converter.PNG',
  },
];

export const Projects: React.FC = React.memo(
  () => {
    let container = useRef<HTMLDivElement | null>(null);
    let controls = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (container.current) {
        gsap.to(container.current, 
          {
            opacity: 1,
            duration: 2,
            ease: Power3.easeOut,
          })
      }

      if (controls.current) {
        gsap.to(controls.current, 
          {
            left: 0,
            duration: 2,
            ease: Power3.easeOut,
          })
      }
    }, []);

    return (
      <>
        <Particles />

        <div 
          className="projects"
          ref={container}
        >
          {/* <Particles /> */}
          <div 
            className="projects__controls"
            ref={controls}
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
          </div>

          <div className="projects__wrapper">
            <ProjectsList projects={projects} />
          </div>
        </div>
      </>
    );
  }
);
