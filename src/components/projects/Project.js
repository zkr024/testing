/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import allData from './AllData';

import './style/project.css';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Project = () => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Slider {...settings}>
    { allData.map((info, i) => (
      <div className="project-card" key={i}>
        <div className="project-image-container">
          <img
            src={require(`./images/${info.image}`)}
            alt={info.alt}
          />
        </div>
        <p className="project-description">{info.description}</p>
        <div>Built with:</div>
        <ul>
          {info.technologies.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={info.link} target="_blank" rel="noopener noreferrer">
            <button type="button" className="project-button">
              <div>See Live</div>
              <div className="project-button-container">
                <img
                  src={require('./images/link.png')}
                  alt="link logo"
                />
              </div>
            </button>
          </a>
          <a href={info.github} target="_blank" rel="noopener noreferrer">
            <button type="button" className="project-button">
              <div>See Repo</div>
              <div className="project-button-container">
                <img
                  src={require('./images/git.png')}
                  alt="git logo"
                />
              </div>
            </button>
          </a>
        </div>
      </div>
    ))}
  </Slider>
);

export default Project;
