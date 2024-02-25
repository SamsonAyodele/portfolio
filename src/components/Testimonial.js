import React from "react";
import Layout from "./Layout";
import image from "../assets/mypics2.png";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="content">
        <h1 className="cont">Testimonies & Recommendations</h1>
      </div>
      <div className="detail">
        <div className="lay-out">
          <Layout
            Img={image}
            Name={"Samson Ayodele"}
            Comments={
              "Samson gets things done. He’s very passionate about what he does and he’s always fun to be with."
            }
          />
        </div>

        <div className="lay-out">
          <Layout
            Img={image}
            Name={"Samson Ayodele"}
            Comments={
              "Samson gets things done. He’s very passionate about what he does and he’s always fun to be with."
            }
          />
        </div>
        <div className="lay-out">
          <Layout
            Img={image}
            Name={"Samson Ayodele"}
            Comments={
              "Samson gets things done. He’s very passionate about what he does and he’s always fun to be with."
            }
          />
        </div>
        <div className="lay-out">
          <Layout
            Img={image}
            Name={"Samson Ayodele"}
            Comments={
              "Samson gets things done. He’s very passionate about what he does and he’s always fun to be with."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
