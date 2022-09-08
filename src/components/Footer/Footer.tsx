import React from 'react';
import './Footer.scss';

export const Footer: React.FC = React.memo(
  () => (
    <div className="footer">
      <div className="footer__wrapper">
        <a href="mailto:kuneneswazi18@gmail.com">
          <img
            src={`${process.env.PUBLIC_URL}/images/email.png`}
            alt="email"
            className="footer__icon"
          />
        </a>

        <a 
          href="https://www.linkedin.com/in/swazi-kunene-609352208/"
          target="_blank"
          rel="noreferrer"
        >
          <img
              src={`${process.env.PUBLIC_URL}/images/linkedin.svg`}
              alt="linkedin"
              className="footer__icon"
            />
        </a>

        <a 
          href="https://github.com/59MrRobot"
          target="_blank"
          rel="noreferrer"
        >
          <img
              src={`${process.env.PUBLIC_URL}/images/github.svg`}
              alt="github"
              className="footer__icon"
            />
        </a>
      </div>
    </div>
  )
);
