import React from "react";
import Socials from "./Socials";
import IMG from "../assets/mypics2.png";

const Photo = () => {
  return (
    <div className="photo">
      <div className="img-soc">
        <Socials />
      </div>

      <img src={IMG} alt="img" className="hero-img" />
    </div>
  );
};

export default Photo;
