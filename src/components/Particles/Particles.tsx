import React, { useEffect } from 'react';
import './Particles.scss';
import { gsap, Power1 } from "gsap";
import cn from 'classnames';
import { useLocation } from 'react-router-dom';

export const Particles: React.FC = React.memo(
  () => {
    const location = useLocation();

    useEffect(() => {
      let count = 100;
      const particleClass = 'particle';
      const particleColors = ['#70798C', '#F5F1ED', '#DAD2BC', '#A99985', '#6CB4EE'];
      const particles = document.getElementById('particles');
      const w = particles?.offsetWidth;
      const h = particles?.offsetHeight;

      if (location.pathname === '/about') {
        count = 75;
      }

      for (let i = 0; i < count; i++) {
        let particle = document.createElement('div');
      
        particle.className = particleClass;
        particles?.appendChild(particle);

        if (w && h) {
          gsap.set(particle, {
            x: gsap.utils.random(0, w),
            y: gsap.utils.random(0, h) - (h - 0.5),
            scale: gsap.utils.random(0.5, 1),
            backgroundColor: gsap.utils.random(particleColors),
          })
          animate(particle, h);
        }
      }
    }, [location.pathname]);

    return (
      <div 
        className={cn(
          'particles',
          {'particles--projects': location.pathname === '/projects'},
          {'particles--about': location.pathname === '/about'},
        )} 
        id="particles"
      >
      </div>
    )
  }
);

function animate(particle: HTMLDivElement, h: number | undefined) {
  gsap.to(particle, {
    y: h,
    duration: gsap.utils.random(5, 10),
    ease: 'none', 
    repeat: -1,
    delay: -10,
  });

  gsap.to(particle, {
    x: '+=50',
    duration: gsap.utils.random(1, 6),
    ease: Power1.easeInOut, 
    repeat: -1,
    yoyo: true,
  });

  gsap.to(particle, {
    opacity: 0,
    duration: gsap.utils.random(1, 2),
    ease: Power1.easeInOut, 
    repeat: -1,
    yoyo: true,
  });
}

