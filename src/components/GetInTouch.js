import React from "react";
import Socials from "./Socials";
import Email from "../assets/Combined Shape.svg";
import Call from "../assets/Fill 1.svg";
import ContactForm from "./ContactForm";

const GetInTouch = () => {
  return (
    <div className="connect">
      <div className="get-in-touch">
        <div className="contact-details">
          <h1>Get In Touch</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras{" "}
            <br></br> nec sollicitudin tellus. Phasellus ac nisi augue.
          </p>
          <div>
            <Socials />
            {/* <span className='xyluv'>-xyluv</span> */}
          </div>
        </div>

        <div className="email">
          <div className="gmail">
            <img src={Email} alt="mail" />
          </div>
          <div className="text">
            <p className="text-bold">idowusamson0777@gmail.com</p>
            <p>Send a message anytime!</p>
          </div>
        </div>

        <div className="email">
          <div className="calling">
            <img src={Call} alt="mail" />
          </div>
          <div className="num">
            <p className="text-bold">+234-8032-123930.</p>
            <p>Call anytime</p>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-form">
          <h1 className="contact-head">Need a Service?</h1>
          <p className="send">Send A Message</p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
