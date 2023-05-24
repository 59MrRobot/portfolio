import React from 'react';
import './Footer.scss';
import '../../styles/strong.scss';

export const Footer: React.FC = React.memo(
  () => (
    <div className="footer">
      <div className="footer__wrapper">
        <p className="footer__title">
          Get <span className="strong">in Touch.</span>
        </p>

        <p className="footer__text">So that we can talk more about...</p>

        <div className="footer__icons">
          <a
            href={require('./Swazi_Kunene_CV.pdf')}
            target="_blank"
            className="footer__icon footer__icon--cv"
            rel="noreferrer"
          >
          </a>

          <a
            href="mailto:kuneneswazi18@gmail.com"
            target="_blank"
            className="footer__icon footer__icon--email"
            rel="noreferrer"
          >
          </a>

          <a
            href="https://github.com/59MrRobot"
            target="_blank"
            className="footer__icon footer__icon--github"
            rel="noreferrer"
          >
          </a>

          <a
            href="https://www.linkedin.com/in/swazi-kunene-609352208/"
            target="_blank"
            className="footer__icon footer__icon--linkedin"
            rel="noreferrer"
          >
          </a>
        </div>
      </div>
    </div>
  )
);
