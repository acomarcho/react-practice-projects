import React from "react";
import "./Features.scss";
import Accordion from "./Accordion";
import Image from "../images/features-dashboard.png";
import ScrollAnimation from "react-animate-on-scroll";

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="title-container">
          <ScrollAnimation animateIn="fadeInUp">
            <h2>Online service features</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
              officiis delectus facilis adipisci esse perferendis exercitationem
              sit quod, quaerat eos nostrum illo deserunt explicabo nemo.
            </p>
          </ScrollAnimation>
        </div>
        <div className="flex-container">
          <Accordion />
          <div className="img-container">
            <ScrollAnimation animateIn="fadeInUp">
              <img src={Image} alt="dashboard" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
