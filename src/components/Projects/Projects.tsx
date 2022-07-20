import React from 'react';
import { ProjectsList } from '../ProjectsList';
import './Projects.scss';

const projects = [
  {
    name: 'MyBiKE Landing Page',
    url: 'https://59mrrobot.github.io/mybike-landing-page/',
    thumbnail: 'mybike.png',
  },
  {
    name: 'Kickstarter Landing Page',
    url: 'https://59mrrobot.github.io/kickstarter-landing-page/',
    thumbnail: 'kickstarter.png',
  },
  {
    name: 'React Wordle',
    url: 'https://59mrrobot.github.io/wordle-project/',
    thumbnail: 'wordle.png',
  },
];

const techStack = ['React', 'TypeScript', 'JavaScript', 'HTML', 'SCSS'];

export const Projects: React.FC = () => {
  return (
    <div className="projects">
      <div className="projects__wrapper">
        <h1 className="projects__title">Projects</h1>

        <ProjectsList projects={projects} />

        <div className="projects__tech">
          <h2 className="projects__tech-title">Technology Stack:</h2>

          <ul className="projects__tech-list">
            {techStack.map(tech => {
              return (
                <li key={tech}>
                  {tech}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
