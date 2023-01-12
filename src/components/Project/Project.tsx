import React, { useEffect, useRef } from 'react';
import './Project.scss';
import { gsap, Power3 } from "gsap";

interface Props {
  project: Project;
}

export const Project: React.FC<Props> = React.memo(
  ({ project }) => {
    let container = useRef<HTMLDivElement | null>(null);
    let title = useRef<HTMLHeadingElement | null>(null);
    const isScreenSizeDesktop = window.matchMedia("(min-width: 1024px)").matches;

    useEffect(() => {
      if (container.current) {
        gsap.to(container.current, 
          {
            right: 0,
            duration: 2,
            ease: Power3.easeOut,
          })
      }
      
    }, []);

    return (
      <div 
        className="project"
        ref={container}
        onMouseEnter={() => {
          if (title.current && container.current && isScreenSizeDesktop) {

            gsap.to(title.current, {
              left: "50%",
              transform: "translateX(-50%)",
              duration: 0.5,
            });

            gsap.to(container.current, {
              boxShadow: "10px 10px 8px #888888",
              duration: 0.5,
            });
          }
        }}
        onMouseLeave={() => {
          if (title.current && container.current && isScreenSizeDesktop) {
            gsap.to(title.current, {
              left: 0,
              transform: "translateX(0)",
              duration: 0.5,
            });

            gsap.to(container.current, {
              boxShadow: "0 0 0 transparent",
              duration: 0.5,
            });
          }
        }}
      >
        <img 
          src={`${process.env.PUBLIC_URL}/images/${project.thumbnail}`}
          alt="project thumbnail"
          className="project__image"
        />
        <h2 
          className="project__title"
          ref={title}
        >
          {project.name}
        </h2>

        <p
          className="project__type"
        >
          {project.type}
        </p>
      </div>
    );
  }
);
