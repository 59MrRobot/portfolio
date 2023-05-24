import React from 'react';
import './Home.scss';
import '../../styles/strong.scss';

export const Home: React.FC = React.memo(
  () => {
    return (
      <div className="home" id="home">
        <div className="home__wrapper">
          <nav className="navbar">
            <a href="/" className="navbar__logo">Swazi Kunene</a>

            <ul className="navbar__list">
              <li className="navbar__item">
                <a href="#home" className="navbar__link">Home</a>
              </li>
              <li className="navbar__item">
              <a href="#work" className="navbar__link">Work</a>
              </li>
              <li className="navbar__item">
              <a href="#about" className="navbar__link">About</a>
              </li>
            </ul>
          </nav>

          <h2 className="home__text">
            I’m a junior developer specialising in <span className="strong">Frontend Development</span>
          </h2>

          <a
            href="#technology"
            className="home__down"
          >
          </a>
        </div>
      </div>
    );
  }
);
