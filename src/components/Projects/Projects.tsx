import React, { useEffect, useRef } from 'react';
import { ProjectsList } from '../ProjectsList';
import './Projects.scss';
import { Link } from 'react-router-dom';
import { gsap, Power3 } from "gsap";

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
    name: 'Weather App',
    type: "App",
    url: 'https://59mrrobot.github.io/weather-app/',
    thumbnail: 'weather-app.png',
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
      <div 
          className="projects"
          ref={container}
        >
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
    );
  }
);