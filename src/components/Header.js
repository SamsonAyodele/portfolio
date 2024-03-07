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

const Header = () => {
  return (
    <>
      <div className="header-section">
        <div className="nav-section">
          <div className="nav--links">
            <Nav />
          </div>

          <div className="hero-section">
            <Intro />
          </div>
        </div>
        <div className="img-section">
          <div className="img">
            <Photo />
          </div>
        </div>
      </div>

      <div id="about-section">
        <About />
      </div>

      <div className="skills">
        <Skill />
      </div>

      <div id="mainService">
        <Service />
      </div>

      <div id="project">
        <Projects />
      </div>

      <div className="testimonials">
        <Testimonial />
      </div>

      <div id="contact">
        <GetInTouch />
      </div>

      <div className="footer-section">
        <Footer />
      </div>
    </>
  );
};

export default Header;
