import React from "react";
import Socials from "./Socials";

const About = () => {
  return (
    <div className="about">
      <h1 className="abt-text">About Me</h1>
      <p className="abt-paragraph">
        Samson Ayodele is a passionate and goal driven Tech entrepreneur whose
        interest is in using technology to build solutions to solve real world
        problems.
      </p>
      <div className="abt-soc">
        <Socials />
      </div>
    </div>
  );
};

export default About;
