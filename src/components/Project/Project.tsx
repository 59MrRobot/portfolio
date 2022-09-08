import React, { useEffect, useRef } from 'react';
import './Project.scss';
import { gsap, Power3 } from "gsap";

interface Props {
  project: Project;
}

export const Project: React.FC<Props> = React.memo(
  ({ project }) => {
    let container = useRef<HTMLDivElement | null>(null);
    let image = useRef<HTMLImageElement | null>(null);
    let title = useRef<HTMLHeadingElement | null>(null);

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
          if (image.current && title.current && container.current) {
            gsap.to(image.current, {
              scale: 1.1,
              top: "-25px",
              left: "-25px",
              boxShadow: "10px 10px 8px #888888",
              duration: 0.5,
            });

            gsap.to(title.current, {
              left: "50%",
              transform: "translateX(-50%)",
              duration: 0.5,
            });

            gsap.to(container.current, {
              boxShadow: "5px 5px 8px #000",
              duration: 0.5,
            });
          }
        }}
        onMouseLeave={() => {
          if (image.current && title.current && container.current) {
            gsap.to(image.current, {
              scale: 1,
              top: 0,
              left: 0,
              boxShadow: "0 0 0",
              duration: 0.5,
            });

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
          ref={image}
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
