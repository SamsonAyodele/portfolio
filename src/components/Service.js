import React from "react";
import ServiceRendered from "./ServiceRendered";
import Responsive from "../assets/responsive.svg";
import Vector from "../assets/checklist 1.svg";
import Dev from "../assets/seo (1) 1.png";
import Database from "../assets/Group.png";
import Writing from "../assets/notes 1.png";
import presentation from "../assets/presentation1.svg";
// import Consulting from "../assets/consultation1.svg";

const Service = () => {
  return (
    <div className="service-cont">
      <header>
        <h1>Services I Render</h1>
        <p className="skill-subHead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec
          sollicitudin tellus. Phasellus.
        </p>
      </header>

      <div className="serviced">
        <ServiceRendered
          Pics={presentation}
          Title={"Training"}
          SubTitle={
            "I offer instructor-led training in a way that fits with the way you work."
          }
        />

        {/* <ServiceRendered
          Pics={Consulting}
          Title={"IT Consulting"}
          SubTitle={
            "I offer Information technology consulting as a field of activity focused on advising organizations on how best to use information technology in achieving their business objectives."
          }
        /> */}

        <ServiceRendered
          Pics={Responsive}
          Title={"Responsive Web Design"}
          SubTitle={
            "I Help design Mobile-friendly, world class websites that helps scales your business and helps user experience get better."
          }
        />
        <ServiceRendered
          Pics={Database}
          Title={"DataBase Management"}
          SubTitle={
            "With equipped skills of developing and maintaining databases i could  help develop scalable and optimized databases for your organization."
          }
        />

        <ServiceRendered
          Pics={Vector}
          Title={"Software Testing"}
          SubTitle={
            "I help test softwares ready for production to fish out bugs and give advice on how to make it scalable, usable and enterprise-friendly. "
          }
        />

        <ServiceRendered
          Pics={Dev}
          Title={"Web Development"}
          SubTitle={
            " I help develop technical solutions in form of softwares that answer to the needs of customer’s problems."
          }
        />
        <ServiceRendered
          Pics={Writing}
          Title={"Technical Writing"}
          SubTitle={
            "I help channel and transfer information between two or more parties, through any medium that best facilitates the transfer and comprehension of the information."
          }
        />
      </div>
    </div>

    // </div>
  );
};

export default Service;
