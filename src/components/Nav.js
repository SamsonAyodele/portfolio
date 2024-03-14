import React from "react";
// import Socials from "./Socials";

const Nav = (props) => {
  return (
    <div className={props.darkMode ? "" : "dark"}>
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

        <div className="toggler">
          <p className="toggler--light">Light</p>

          <div className="toggler--slider" onClick={props.toggleDarkMode}>
            <div className="toggler--slider--circle"></div>
          </div>

          <p className="toggler--dark">Dark</p>
        </div>

        <div class="hamburger">
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13.5H17H1ZM1 1.5H17H1ZM1 7.5H17H1Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
