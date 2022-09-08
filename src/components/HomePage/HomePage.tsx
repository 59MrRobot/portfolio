import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import { gsap, Power3 } from "gsap";
import { Footer } from '../Footer';
import { Particles } from '../Particles';

export const HomePage: React.FC = React.memo(
  () => {
    let title = useRef<HTMLHeadingElement | null>(null);
    let container = useRef<HTMLDivElement | null>(null);
    let gif = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
      if (container.current) {
        gsap.to(container.current, 
          {
            opacity: 1,
            duration: 2,
            ease: Power3.easeOut,
          })
      }
    }, []);

    return (
      <div
        className="homepage"
        ref={container}
      >
        <Particles />
        <div className="homepage__wrapper">
          <Link to="about" className="homepage__title-link">
            <h1
              ref={title}
              className="homepage__title"
              onMouseEnter={() => {
                if (title.current && gif.current) {
                  gsap.to(title.current, {
                    left: '25%',
                    duration: 0.5,
                  });

                  gsap.to(gif.current, {
                    display: "unset",
                  })
                }
              }}
              onMouseLeave={() => {
                if (title.current && gif.current) {
                  gsap.to(title.current, {
                    left: 0,
                    duration: 0.5,
                  })

                  gsap.to(gif.current, {
                    display: "none",
                  })
                }
              }}
            >
              <img
                ref={gif}
                src={`${process.env.PUBLIC_URL}/images/tap-unscreen.gif`}
                alt="d"
                className="homepage__gif"
              />
              Swazi Kunene
            </h1>
          </Link>

          <h2 className="homepage__subtitle">Junior Frontend Developer</h2>

          <Link 
            to="projects"
            className="homepage__link"
          >
            Projects
          </Link>
        </div>

        <Footer />
      </div>
    );
  }
);
