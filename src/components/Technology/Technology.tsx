import React, { useState } from 'react';
import './Technology.scss';
import { techStack } from '../../data';
import '../../styles/strong.scss';

export const Technology: React.FC = React.memo(
  () => {
    const [hover, setHover] = useState("");

    return (
      <div className="technology" id="technology">
        <div className="technology__wrapper">
          <h3 className="technology__text">Some of <span className="strong">the technologies I use</span></h3>

          <div className="technology__images">
            <ul className="technology__list">
              {techStack.map(tech => (
                <li key={tech} className="technology__item">
                  <img
                    src={hover !== tech ? `${process.env.PUBLIC_URL}/icons/${tech}.svg` : `${process.env.PUBLIC_URL}/icons/${tech}-hover.svg`}
                    alt={`${tech} icon`}
                    className="technology__icon"
                    onMouseEnter={() => setHover(tech)}
                    onMouseLeave={() => setHover("")}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
);