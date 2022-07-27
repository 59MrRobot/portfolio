import React, { useEffect, useRef } from 'react';
import './About.scss';
import { Link } from 'react-router-dom';
import { gsap, Power0, Power3 } from "gsap";
import { Particles } from '../Particles';

const techStack = ['React', 'TypeScript', 'JavaScript', 'HTML', 'SCSS'];

export const About: React.FC = React.memo(
  () => {
    let controls = useRef<HTMLDivElement | null>(null);
    let tech = useRef<HTMLUListElement | null>(null);
    let cv = useRef<HTMLAnchorElement | null>(null);
    let para1 = useRef<HTMLParagraphElement | null>(null);
    let para2 = useRef<HTMLParagraphElement | null>(null);
    let para3 = useRef<HTMLParagraphElement | null>(null);
    let para4 = useRef<HTMLParagraphElement | null>(null);
    let para5 = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
      if (controls.current) {
        gsap.to(controls.current, 
          {
            left: 0,
            duration: 2,
            ease: Power3.easeOut,
          })
      }

      if (tech.current) {
        gsap.to(tech.current, 
          {
            left: 0,
            duration: 2,
            ease: Power3.easeOut,
            delay: 0.3,
          })
      }

      const paragraphArray = [para1, para2, para3, para4, para5];

      paragraphArray.map((paragraph, index) => {
        if (paragraph.current) {
          gsap.to(paragraph.current, {
            right: 0,
            duration: 1,
            ease: Power0.easeNone,
            delay: index * 0.2,
          })
        }

        return 0;
      })

      if (cv.current) {
        gsap.to(cv.current, 
          {
            right: 0,
            duration: 1,
            ease: Power0.easeNone,
            delay: 1,
          })
      }
    }, []);

    return (
      <div
        className="about"
      >
        <Particles />
        <div
          className="about__controls"
          ref={controls}
        >
          <Link to="/">
            <img 
              src={`${process.env.PUBLIC_URL}/images/home.svg`} 
              alt="home icon"
              className="home-icon"
            />
          </Link>

          <h1 className="about__title">Who Am I?</h1>

          <div></div>
        </div>

        <div className="about__wrapper">
          <ul 
            className="about__tech"
            ref={tech}
          >
            {techStack.map(tech => {
              return (
                <li key={tech}>
                  {tech}
                </li>
              );
            })}
          </ul>

          <div className="about__text-container">
            <p 
              className="about__text about__text-large"
              ref={para1}
            >
              Hi, I'm Swazi. I'm a Junior Frontend Developer with 6 months of practical experience in Frontend Development.
            </p>

            <p
              className="about__text"
              ref={para2}
            >
              I'm a highly dedicated individual who's always trying to sharpen his skills and gain more knowledge.
            </p>

            <p
              className="about__text"
              ref={para3}
            >
              I am confident in my abilities to create dynamic web pages. I'm familiar with responsive web design, cross-browser, SASS pre-processor and BEM methodology. I'm able to work with RESTful API's - be it fetching, updating, deleting or posting data on the server.
            </p>

            <p
              className="about__text"
              ref={para4}
            >
              I also have some practical experience in creating dynamic React web applications and working with Rendering Lists, Forms (lifting state up), Classes, Functional Components, Contexts and React Router.
            </p>

            <p
              className="about__text about__text-small"
              ref={para5}
            >
              I am a huge consumer of music, I'd be lying if I said I didn't listen to it 24/7, and sometimes when I'm not building web pages, I'm making <a target="_blank" href="https://soundcloud.com/s_k_music" rel="noreferrer" className="link">my own music</a>, for myself. I'm also a huge football fan - my favourite club being Arsenal FC.
            </p>
          </div>

          <a 
            href={require('./Swazi_Kunene_CV.pdf')}
            ref={cv}
            target="_blank"
            rel="noreferrer"
            className="link about__cv"
          >
            My CV (pdf 46kb)
          </a>
        </div>
      </div>
    );
  }
);
