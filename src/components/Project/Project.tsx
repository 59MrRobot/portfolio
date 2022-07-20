import React from 'react';
import './Project.scss';

interface Props {
  project: Project;
}

export const Project: React.FC<Props> = ({ project }) => {

  return (
    <div className="project">
      <img 
        src={`${process.env.PUBLIC_URL}/images/${project.thumbnail}`} alt="project thumbnail"
        className="project__image" 
      />
      <h2 className="project__title">{project.name}</h2>
      <a 
        href={project.url} 
        target="_blank" 
        rel="noreferrer"
        className="project__link"
      >
        View
      </a>
    </div>
  )
}
