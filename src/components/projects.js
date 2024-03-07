import React from "react";
import Milestone from "./Milestone";

const Projects = () => {
  return (
    <>
      <div className="project-content">
        <div className="cont-header">
          <h1>Milestones of Projects</h1>
          <p className="miles">Here are a few projects i’ve worked on.</p>
        </div>

        <div id="projectDone">
          <div className="milestones">
            <div className="milestone1 mile">
              <Milestone
                ProjectTitle={"BackEnd Development"}
                Stack={"Node/ExpressJs/MongoDb"}
                Description={"https://kkjevo.com/"}
                Name={"Event Ticketing"}
              />
              <Milestone
                ProjectTitle={"BackEnd Development"}
                Stack={"Node/ExpressJs/SQL"}
                Description={"https://kkjevo.com/"}
                Name={"Pant Store API"}
              />
              <Milestone
                ProjectTitle={"BackEnd Development"}
                Stack={"Node/ExpressJs/SQL"}
                Description={"https://kkjevo.com/"}
                Name={"Amox Server"}
              />
            </div>

            <div className="milestone2 mile">
              <Milestone
                ProjectTitle={"Pant-Photo"}
                Stack={"Html, Css"}
                Description={"https://kkjevo.com/"}
                Name={"Pant-Photo"}
              />
            </div>

            <div className="milestone3 mile">
              <Milestone
                ProjectTitle={"Pig Game"}
                Stack={"JavaScript"}
                Description={"https://github.com/SamsonAyodele/PigGame"}
                Name={"Pig Game"}
              />
            </div>

            <div className="milestone4 mile">
              <Milestone
                ProjectTitle={"E-commerce Website"}
                Stack={"WordPress"}
                Description={"https://shopmotune.com/home/"}
                Name={"Shop Motune"}
              />

              <Milestone
                ProjectTitle={"Construction Website"}
                Stack={"WordPress"}
                Description={"https://kkjevo.com/"}
                Name={"KKjevo"}
              />
            </div>

            <div className="milestone5 mile">
              <Milestone
                ProjectTitle={"Digital Business Card"}
                Stack={"ReactJs"}
                Description={
                  "https://github.com/SamsonAyodele/Digital-Business-Card"
                }
                Name={"Digital"}
              />
              <Milestone
                ProjectTitle={"Tenzie Game"}
                Stack={"ReactJs"}
                Description={"https://github.com/SamsonAyodele/TenzieReactGame"}
                Name={"Tenzie Game"}
              />
            </div>

            <div className="milestone6 mile">
              <Milestone
                ProjectTitle={"Construction Website"}
                Stack={"WordPress"}
                Description={"https://kkjevo.com/"}
                Name={"KKjevo"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
