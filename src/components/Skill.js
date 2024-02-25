import React from "react";
import Html from "../assets/html5.png";
import Js from "../assets/js.png";
import Wordpress from "../assets/wordpress.png";
import Windows from "../assets/windows.png";

const Skill = () => {
  return (
    <div className="my-skill">
      <h1>My Skills</h1>
      <p className="skill-paragraph">Here are a few skills I possess</p>
      <div className="skill-stack">
        <div className="stack">
          <div className="skill-logo">
            <img src={Html} alt="html" />
          </div>
          <div className="skill-name">
            <label for="file">HTML / CSS</label>
            <progress id="file" value="100" max="100">
              {" "}
              32%{" "}
            </progress>
          </div>
        </div>

        <div className="stack">
          <div className="skill-logo">
            <img src={Js} alt="js" />
          </div>
          <div className="skill-name">
            <label for="file">JAVASCRIPT</label>
            <progress id="file" value="80" max="100">
              {" "}
              80%{" "}
            </progress>
          </div>
        </div>

        <div className="stack">
          <div className="skill-logo">
            <img src={Wordpress} alt="js" />
          </div>
          <div className="skill-name">
            <label for="file">WORDPRESS</label>
            <progress id="file" value="100" max="100">
              {" "}
              80%{" "}
            </progress>
          </div>
        </div>

        <div className="stack">
          <div className="skill-logo">
            <img src={Windows} alt="js" />
          </div>
          <div className="skill-name">
            <label for="file">WINDOWS</label>
            <progress id="file" value="100" max="100">
              {" "}
              80%{" "}
            </progress>
          </div>
        </div>

        <div className="stack">
          <div className="skill-logo">
            <img src={Js} alt="js" />
          </div>
          <div className="skill-name">
            <label for="file">NODE/EXPRESS JS</label>
            <progress id="file" value="70" max="100">
              {" "}
              80%{" "}
            </progress>
          </div>
        </div>

        <div className="stack">
          <div className="skill-logo">
            <img src={Js} alt="js" />
          </div>
          <div className="skill-name">
            <label for="file">SEQUELIZE / MONGOOSE</label>
            <progress id="file" value="60" max="100">
              {" "}
              80%{" "}
            </progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
