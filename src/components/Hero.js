import React from "react";
import { animateScroll } from 'react-scroll';
import './CSS/Hero.css';
import Carousel from "./Carousel.js"

const Hero = () => {
  const handleButtonClick = () => {
    animateScroll.scrollTo('services', {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -55,
    });
  };

  return (

    <div className="hero">

<div className="hero-text">
<div className="hero-container hero-container-1" id="hero-text-container">
        <div id="super-title">
          <div>
            Your One-Stop Solution for Automotive Repairs
          </div>
        </div>
        <div className="card-body" id="hero-subtitle">
          <p> At Toprin General, we take pride in our fast, efficient, friendly service.  We use state-of-the-art equipment to provide comprehensive automotive services including airbag module reset, car & key programming, and instrument cluster repair.  Trust us to handle all your vehicle maintenance and repair needs.
          </p>
        </div>
        <div className="hero-button">
          <a href="/" className="gsn-button">Get Started Now</a>
        </div>
      </div>

      <div className="hero-container hero-container-2">
        <img className="hero-image" src="https://i.imgur.com/MD8sUw8.jpg" alt="Illustration of Car  & Services" />
      </div>
</div>

      <div className="hero-container hero-container-3">
        <div className="hook">
          <Carousel />
        </div>
      </div>

    </div>
  );
};

export default Hero;