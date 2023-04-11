import React, { useEffect, useRef } from 'react';
import { ProjectsList } from '../ProjectsList';
import './Projects.scss';
import { Link } from 'react-router-dom';
import { gsap, Power3 } from "gsap";
import { projects } from '../../data';
import HomeIcon from '@mui/icons-material/Home';

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
              <HomeIcon fontSize='large' style={{ color: "#F5F1ED" }} />
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
