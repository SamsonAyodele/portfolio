import React from "react";

const Milestone = ({ ProjectTitle, Stack, Description, Name }) => {
  return (
    <div className="milestone">
      <h2>{ProjectTitle}</h2>
      <p>{Stack}</p>
      <a className="mile" href={Description} rel="noreferrer" target="_blank">
        <p>{Name}</p>
      </a>
    </div>
  );
};

export default Milestone;
