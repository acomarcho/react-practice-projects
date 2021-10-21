import React from "react";
import "./About.scss";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="box">
          <ScrollAnimation animateIn="fadeInUp">
            <h2>Hi there, I'm Mark!</h2>
            <p>
              I love to create beautiful and efficient websites for my
              customers. I love going through the entire process with the
              customer from concept, to design, and then development and launch.
            </p>
          </ScrollAnimation>
        </div>
        <div className="box">
          <ScrollAnimation animateIn="fadeInUp">
            <div className="info">
              <h3 className="date">2019 - PRESENT</h3>
              <h3>Freelance Web Developer</h3>
              <p>Working happily on my own web projects.</p>
            </div>
            <div className="info">
              <h3 className="date">2018 - 2019</h3>
              <h3>Lead Web Developer</h3>
              <p>Led a project for a major digital agency.</p>
            </div>
          </ScrollAnimation>
        </div>
        <div className="box">
          <ScrollAnimation animateIn="fadeInUp">
            <div className="info">
              <h3 className="date">2017 - 2018</h3>
              <h3>Senior Web Developer</h3>
              <p>Inhouse web developer for an e-commerce firm.</p>
            </div>
            <div className="info">
              <h3 className="date">2018 - 2019</h3>
              <h3>Junior Web Developer</h3>
              <p>Junior web developer for a small web agency.</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
