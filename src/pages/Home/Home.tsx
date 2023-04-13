import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import { gsap, Power3 } from "gsap";
import { Footer } from '../../components/Footer';

export const Home: React.FC = React.memo(
  () => {
    let title = useRef<HTMLHeadingElement | null>(null);
    let container = useRef<HTMLDivElement | null>(null);
    let gif = useRef<HTMLImageElement | null>(null);
    const isScreenSizeDesktop = window.matchMedia("(min-width: 1024px)").matches;

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

    useEffect(() => {
      if (isScreenSizeDesktop) {
        gsap.to(gif.current, {
          display: "none",
        })
      }
    }, [isScreenSizeDesktop]);

    return (
      <div
          className="homepage"
          ref={container}
        >
          <div className="homepage__wrapper">
            <Link to="about" className="homepage__title-link">
              <h1
                ref={title}
                className="homepage__title"
                onMouseEnter={() => {
                  if (title.current && gif.current && isScreenSizeDesktop) {
                    gsap.to(gif.current, {
                      display: "unset",
                    })
                  }
                }}
                onMouseLeave={() => {
                  if (title.current && gif.current && isScreenSizeDesktop) {
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
              className="homepage__link btn-grad"
            >
              Projects
            </Link>
          </div>

          <Footer />
        </div>
    );
  }
);
