import React from "react";
import "./Hero.scss";
import { FaUser } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <ScrollAnimation animateIn="fadeIn">
          <div className="header-container">
            <h1>I love to create beautiful and efficient websites</h1>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <div className="buttons-container">
            <button className="btn-discover">Discover</button>
            <button className="btn-contact">
              <FaUser />
              Contact Me
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Hero;
