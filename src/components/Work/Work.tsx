import React from 'react';
import './Work.scss';
import '../../styles/strong.scss';

export const Work: React.FC = React.memo(
  () => {
    return (
      <div className="work" id="work">
        <div className="work__wrapper">
          <h3 className="work__text">
            Selected <span className="strong">Works</span>
          </h3>

          <div className="work__content">
            <div className="work__project">
              <img
                src={`${process.env.PUBLIC_URL}/images/kickstarter.png`}
                alt=""
                className="work__project-image"
              />

              <div className="work__project-text">
                <h4 className="work__project-title">Kickstarter Landing Page</h4>

                <p className="work__project-overview">
                  Kickstarter Landing Page designed <span className="strong">according to a Figma template.</span>
                </p>

                <p className="work__project-description">Website Design</p>

                <a
                  href="https://59mrrobot.github.io/kickstarter-landing-page/"
                  target='_blank'
                  rel="noreferrer"
                  className="work__project-link"
                >
                  View Work <span className="work__project-arrow"></span>
                </a>
              </div>
            </div>

            <div className="work__project">
              <div className="work__project-text">
                <h4 className="work__project-title">MyBiKE Landing Page</h4>

                <p className="work__project-overview">
                  MyBiKE Landing Page designed <span className="strong">according to a Figma template.</span>
                </p>

                <p className="work__project-description">Website Design</p>

                <a
                  href="https://59mrrobot.github.io/mybike-landing-page/"
                  target='_blank'
                  rel="noreferrer"
                  className="work__project-link"
                >
                  View Work <span className="work__project-arrow"></span>
                </a>
              </div>

              <img
                src={`${process.env.PUBLIC_URL}/images/mybike.png`}
                alt=""
                className="work__project-image"
              />
            </div>

            <div className="work__project">
              <img
                src={`${process.env.PUBLIC_URL}/images/wordle.png`}
                alt=""
                className="work__project-image"
              />

              <div className="work__project-text">
                <h4 className="work__project-title">Wordle</h4>

                <p className="work__project-overview">
                  Recreation of the famous <span className="strong">New York Times Wordle game.</span>
                </p>

                <p className="work__project-description">Web App</p>

                <a
                  href="https://59mrrobot.github.io/wordle-project/"
                  target='_blank'
                  rel="noreferrer"
                  className="work__project-link"
                >
                  View Work <span className="work__project-arrow"></span>
                </a>
              </div>
            </div>

            <div className="work__project">
              <div className="work__project-text">
                <h4 className="work__project-title">E-commerce Site</h4>

                <p className="work__project-overview">
                  An e-commerce site that fetches information from <span className="strong">an api I created and displays it on the site.</span>
                </p>

                <p className="work__project-description">Website</p>

                <a
                  href="https://59mrrobot.github.io/ecommerce-site/"
                  target='_blank'
                  rel="noreferrer"
                  className="work__project-link"
                >
                  View Work <span className="work__project-arrow"></span>
                </a>
              </div>

              <img
                src={`${process.env.PUBLIC_URL}/images/ecommerce-site.png`}
                alt=""
                className="work__project-image"
              />
            </div>

            <div className="work__project">
              <img
                src={`${process.env.PUBLIC_URL}/images/ecommerce-admin.png`}
                alt=""
                className="work__project-image"
              />

              <div className="work__project-text">
                <h4 className="work__project-title">E-Commerce Admin Site</h4>

                <p className="work__project-overview">
                  This is an admin site, which serves as an extension of <span className="strong">the e-commerce site. kindly request login details from me.</span>
                </p>

                <p className="work__project-description">Web App</p>

                <a
                  href="https://59mrrobot.github.io/ecommerce-admin/"
                  target='_blank'
                  rel="noreferrer"
                  className="work__project-link"
                >
                  View Work <span className="work__project-arrow"></span>
                </a>
              </div>
            </div>

            {/* <div className="work__project">
              <div className="work__project-text">
                <h4 className="work__project-title">Currency Converter</h4>

                <p className="work__project-overview">
                  A currency converter web app. <span className="strong">Users can also reverse the currency exchange rate.</span>
                </p>

                <p className="work__project-description">Web App</p>

                <a
                  href="https://59mrrobot.github.io/currency-converter/"
                  target='_blank'
                  rel="noreferrer"
                  className="work__project-link"
                >
                  View Work <span className="work__project-arrow"></span>
                </a>
              </div>

              <img
                src={`${process.env.PUBLIC_URL}/images/currency-converter.png`}
                alt=""
                className="work__project-image"
              />
            </div> */}

            <div className="work__project">
              <div className="work__project-text">
                <h4 className="work__project-title">Weather App</h4>

                <p className="work__project-overview">
                  A weather app that ustilizes two API, one for the <span className="strong">list of cities and the second for the actual forecasts.</span>
                </p>

                <p className="work__project-description">Web App</p>

                <a
                  href="https://59mrrobot.github.io/weather-app/"
                  target='_blank'
                  rel="noreferrer"
                  className="work__project-link"
                >
                  View Work <span className="work__project-arrow"></span>
                </a>
              </div>

              <img
                src={`${process.env.PUBLIC_URL}/images/weather.png`}
                alt=""
                className="work__project-image"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
);