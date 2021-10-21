import React from "react";
import "./Services.scss";
import { FaCode, FaGem, FaTv } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="title-container">
          <ScrollAnimation animateIn="fadeInUp">
            <h2>Offered Services</h2>
            <p>
              Web design and development have been my bread and butter for more
              than 5 years. During that time I've discovered that I can help
              startups and companies with the following services:
            </p>
          </ScrollAnimation>
        </div>
        <div className="cards-container">
          <ScrollAnimation animateIn="fadeInUp">
            <div className="card">
              <div className="logo">
                <FaGem />
              </div>
              <h3 className="card-heading">Design</h3>
              <p>
                Successful online projects start with good design. It
                establishes a solid foundation for future development and allows
                for long term growth.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
            <div className="card">
              <div className="logo">
                <FaCode />
              </div>
              <h3 className="card-heading">Development</h3>
              <p>
                I can code my own designs or even use the customer's design as
                base. My focus is to generate clean code that's well structured
                for reliability.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
            <div className="card">
              <div className="logo">
                <FaTv />
              </div>
              <h3 className="card-heading">Basic SEO</h3>
              <p>
                i can setup your project to use basic SEO principles which will
                push your project to the first page on search engines and save
                you ads money.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Services;
