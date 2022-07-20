import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';

const techStack = ['React', 'TypeScript', 'JavaScript', 'HTML', 'SCSS'];

export const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="homepage__wrapper">
        <h1 className="homepage__title">Swazi Kunene</h1>

        <ul className="homepage__tech">
          {techStack.map(tech => {
            return (
              <li key={tech}>
                {tech}
              </li>
            );
          })}
        </ul>

        <Link 
          to="projects"
          className="homepage__link"
        >
          Projects
        </Link>
      </div>
    </div>
  )
}
