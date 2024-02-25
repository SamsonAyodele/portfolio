import React from "react";
// import Socials from "./Socials";

const Nav = () => {
  return (
    <>
      <nav className="navigation">
        <div className="logo-text">
          <h1>Samson Ayodele</h1>
        </div>

        <div className="nav-links">
          <ul>
            <li className="links">
              <a href="#about-section">About </a>
            </li>
            <li className="links">
              <a href="#mainService">Services</a>
            </li>
            <li className="links">
              <a href="#projectDone">Projects</a>
            </li>
            <li className="links">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
