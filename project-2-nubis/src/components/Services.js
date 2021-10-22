import React from "react";
import "./Services.scss";
import { FaHeadphones, FaClipboard, FaComments } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="title-container">
          <ScrollAnimation animateIn="fadeInUp">
            <h2>Explore our services</h2>
          </ScrollAnimation>
        </div>
        <div className="services-container">
          <ScrollAnimation animateIn="fadeInUp">
            <article>
              <div className="logo blue">
                <FaHeadphones />
              </div>
              <h3>Analyse your product</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione excepturi fuga doloribus soluta illo quae!
              </p>
              <a href="#home">Learn more →</a>
            </article>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
            <article>
              <div className="logo red">
                <FaClipboard />
              </div>
              <h3>Evaluate opportunities</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione excepturi fuga doloribus soluta illo quae!
              </p>
              <a href="#home">Learn more →</a>
            </article>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
            <article>
              <div className="logo green">
                <FaComments />
              </div>
              <h3>Find the influencers</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ratione excepturi fuga doloribus soluta illo quae!
              </p>
              <a href="#home">Learn more →</a>
            </article>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
