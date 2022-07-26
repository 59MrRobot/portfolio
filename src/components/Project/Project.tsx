import React, { useEffect, useRef } from 'react';
import './Project.scss';
import { gsap, Power3 } from "gsap";

interface Props {
  project: Project;
}

export const Project: React.FC<Props> = ({ project }) => {
  let container = useRef<HTMLDivElement | null>(null);

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
    >
      <img 
        src={`${process.env.PUBLIC_URL}/images/${project.thumbnail}`} alt="project thumbnail"
        className="project__image" 
      />
      <h2 className="project__title">{project.name}</h2>
    </div>
  )
}
