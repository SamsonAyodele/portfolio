import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [userDetails, setUserDetails] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(userDetails);
    setUserDetails("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="fullName"
            value={userDetails.fullName || ""}
            placeholder="Enter your full name"
            required
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="text"
            name="email"
            value={userDetails.email || ""}
            placeholder="Enter a valid email"
            required
            onChange={handleChange}
          />
        </label>
        <textarea
          name="textarea"
          value={userDetails.textarea || ""}
          onChange={handleChange}
          placeholder="Leave a message"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
