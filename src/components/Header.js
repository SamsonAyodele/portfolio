import React from "react";
import Intro from "./Intro";
import Nav from "./Nav";
import About from "./About";
import Skill from "./Skill";
import Service from "./Service";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";
import Photo from "./Photo";
import Projects from "./Projects";
import Testimonial from "./Testimonial";

const Header = (props) => {
  return (
    <div className={props.darkMode ? "" : "dark"}>
      <div className="header-section">
        <div className="nav-section">
          <div className="nav--links">
            <Nav darkMode={props.darkMode} toggleDarkMode={props.toggleDarkMode} />
          </div>

          <div className="hero-section">
            <Intro darkMode={props.darkMode} />
          </div>
        </div>
        <div className="img-section">
          <div className="img">
            <Photo darkMode={props.darkMode} />
          </div>
        </div>
      </div>

      <div id="about-section">
        <About darkMode={props.darkMode} />
      </div>

      <div className="skills">
        <Skill darkMode={props.darkMode} />
      </div>

      <div id="mainService">
        <Service darkMode={props.darkMode} />
      </div>

      <div id="project">
        <Projects darkMode={props.darkMode} />
      </div>

      <div className="testimonials">
        <Testimonial darkMode={props.darkMode} />
      </div>

      <div id="contact">
        <GetInTouch darkMode={props.darkMode} />
      </div>

      <div className="footer-section">
        <Footer darkMode={props.darkMode} />
      </div>
    </div>
  );
};

export default Header;
