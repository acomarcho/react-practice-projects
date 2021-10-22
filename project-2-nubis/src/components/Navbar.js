import React from "react";
import "./Navbar.scss";
import Logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [sidebar, setSidebar] = React.useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="header">
            <a href="#home" onClick={() => setSidebar(false)}>
              <img src={Logo} alt="logo" />
            </a>
            <button
              onClick={() => {
                setSidebar(!sidebar);
              }}
            >
              <FaBars />
            </button>
          </div>
          <div className="links">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
          </div>
        </div>
      </nav>
      <aside className={`${sidebar ? "sidebar open" : "sidebar"}`}>
        <div className="links">
          <a href="#services" onClick={() => setSidebar(false)}>
            Services
          </a>
          <a href="#about" onClick={() => setSidebar(false)}>
            About
          </a>
          <a href="#features" onClick={() => setSidebar(false)}>
            Features
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
