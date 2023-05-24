import React from 'react';
import './About.scss';
import '../../styles/strong.scss';

export const About: React.FC = React.memo(
  () => {
    return (
      <div className="about" id="about">
        <div className="about__wrapper">
          <div className="about__text">
            <h3 className="about__title">A Bit About Me</h3>

            <p className="about__description">
              I am a junior frontend developer who is passionate about creating <span className="strong">beautiful and joyful digital experiences. Besides development, I love music (including making my own), series and football.</span>
            </p>
          </div>

          <div className="about__images">
            <img
              src={`${process.env.PUBLIC_URL}/images/LYML3234.JPG`}
              alt="Me"
              className="about__image about__image--1"
            />

            <img
              src={`${process.env.PUBLIC_URL}/images/arsenal.jpeg`}
              alt="Me"
              className="about__image"
            />

            <img
              src={`${process.env.PUBLIC_URL}/images/music.jpg`}
              alt="Me"
              className="about__image about__image--3"
            />
          </div>
        </div>
      </div>
    );
  }
);
