import React from "react";
import Socials from "./Socials";

const Intro = () => {
  return (
    <section className="hero-content">
      <div className="hero-text">
        <h5 className="hero-text-1">HI THERE</h5>
        <h3 className="hero-text-2">I'M SAMSON AYODELE</h3>
        <h1 className="intro-cont">A Top-notch Developer,Writer and Mentor.</h1>
        <span className="soc">
          <Socials />
        </span>
      </div>
    </section>
  );
};

export default Intro;
