import React from "react";
import "./Navbar.scss";
import logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="header">
            <a href="#hero" className="logo-container">
              <img src={logo} alt="logo" />
            </a>
            <button
              className="sidebar-btn"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div className="links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
      <aside className={`${isSidebarOpen ? "sidebar open" : "sidebar"}`}>
        <div className="links">
          <div className="link">
            <a href="#about">About</a>
          </div>
          <div className="link">
            <a href="#services">Services</a>
          </div>
          <div className="link">
            <a href="#reviews">Reviews</a>
          </div>
          <div className="link">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
