import React from "react";
import "./Reviews.scss";
import Pic1 from "../images/testimonial-1.jpg";
import Pic2 from "../images/testimonial-2.jpg";
import Pic3 from "../images/testimonial-3.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const Reviews = () => {
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <div className="title-container">
          <ScrollAnimation animateIn="fadeInUp">
            <h2>A few words from people that chose to work with me</h2>
          </ScrollAnimation>
        </div>
        <div className="cards-container">
          <ScrollAnimation animateIn="fadeInUp">
            <div className="card">
              <p className="review-text">
                “Mark is a skilled developer which will do everything possible
                to deliver the project on time and I really appreciate that.”
              </p>
              <div className="avatar-container">
                <img src={Pic1} alt="person" />
              </div>
              <h4>Samantha Bloom</h4>
              <p>Team Leader - Syncnow</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
            <div className="card">
              <p className="review-text">
                “Loved to work with Mark he's such an awesome developer with
                great attention to details. He also has a great eye for design.”
              </p>
              <div className="avatar-container">
                <img src={Pic2} alt="person" />
              </div>
              <h4>John Rowling</h4>
              <p>Marketing Manager - Nexlite</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
            <div className="card">
              <p className="review-text">
                “So glad we started working with Mark. We've used many times his
                design and development skills for our inhouse online projects.”
              </p>
              <div className="avatar-container">
                <img src={Pic3} alt="person" />
              </div>
              <h4>Lana Smith</h4>
              <p>General Manager - Shifter</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
