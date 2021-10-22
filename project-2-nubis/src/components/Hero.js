import React from "react";
import "./Hero.scss";
import HeroImage from "../images/header-image.png";
import ScrollAnimation from "react-animate-on-scroll";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="title-container">
          <ScrollAnimation animateIn="fadeIn">
            <h1>Find influencers for your products</h1>
            <p>
              Lorem ipsum dolor sit amet, constectur adipiscing elit. Ut
              dignissim, nque ut ultrices sollicitudin.
            </p>
            <a href="#services">Offered services</a>
          </ScrollAnimation>
        </div>
        <div className="img-container">
          <ScrollAnimation animateIn="fadeIn">
            <img src={HeroImage} alt="hero" />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Hero;
