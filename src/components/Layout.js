import React from "react";

const Layout = ({ Img, Name, Comments }) => {
  return (
    <div className="layout">
      <img alt="img" src={Img} className="layout-img" />
      <p className="name">{Name}</p>
      <p className="comment">{Comments}</p>
    </div>
  );
};

export default Layout;
