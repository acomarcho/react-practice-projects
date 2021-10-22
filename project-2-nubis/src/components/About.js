import React from "react";
import "./About.scss";
import AboutImage from "../images/details-2.png";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-info">
          <ScrollAnimation animateIn="fadeInUp">
            <h5>About us</h5>
            <h2>We have ten years experience in marketing</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum fugiat distinctio excepturi soluta inventore rerum
              expedita dicta fuga molestiae itaque.
            </p>
            <a href="#home">Details</a>
          </ScrollAnimation>
        </div>
        <div className="about-img">
          <ScrollAnimation animateIn="fadeInUp">
            <img src={AboutImage} alt="about" />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
