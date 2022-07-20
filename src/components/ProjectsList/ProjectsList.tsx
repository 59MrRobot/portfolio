import React from 'react';
import { Project } from '../Project/Project';
import './ProjectsList.scss';

interface Props {
  projects: Project[];
}

export const ProjectsList: React.FC<Props> = ({ projects }) => {
  return (
    <ul className="projects-list">
      {projects.map(project => (
        <li key={project.name}>
          <Project project={project} />
        </li>
      ))}
    </ul>
  )
}
