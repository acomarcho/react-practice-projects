import React from "react";
import "./Contact.scss";
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="title-container">
          <ScrollAnimation animateIn="fadeInUp">
            <h2>Contact details</h2>
            <p>
              For any type of online project please don't hesitate to get in
              touch with me.
            </p>
            <p>
              The fastest way is to send me your message using the following
              email contact@domain.com.
            </p>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeInUp">
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Project details"></textarea>
            <button type="submit">Submit</button>
          </form>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
