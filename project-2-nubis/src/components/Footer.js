import React from "react";
import "./Footer.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import DecorationCircles from "../images/decoration-circles.png";
import ScrollAnimation from "react-animate-on-scroll";

const Footer = () => {
  return (
    <section className="footer">
      <img src={DecorationCircles} alt="circles" className="circles" />
      <div className="container">
        <div className="text-container">
          <ScrollAnimation animateIn="fadeIn">
            <h2>
              If you want to find out which are the right influencers for your
              product marketing campaigns, then follow us:
            </h2>
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeIn">
          <div className="icons-container">
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
        <div className="line-break"></div>
        <div className="copy-text">
          <ScrollAnimation animateIn="fadeIn">
            <p>Copyright &copy; Marchotridyo</p>
            <p>Idea from Inovatik</p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Footer;
