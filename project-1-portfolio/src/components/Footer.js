import React from "react";
import "./Footer.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <ScrollAnimation animateIn="fadeIn">
          <div className="icon-container">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <FaPinterestP />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <FaYoutube />
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <p>Copyright &copy; Marchotridyo</p>
          <p>Idea from Inovatik</p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Footer;
