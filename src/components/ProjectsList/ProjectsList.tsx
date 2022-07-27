import React from 'react';
import { Project } from '../Project/Project';
import './ProjectsList.scss';

interface Props {
  projects: Project[];
}

export const ProjectsList: React.FC<Props> = React.memo(
  ({ projects }) => (
    <ul className="projects-list">
      {projects.map(project => (
        <li key={project.name} className="projects-list__item">
          <a 
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="projects-list__link"
          >
            <Project project={project} />
          </a>
        </li>
      ))}
    </ul>
  )
);

