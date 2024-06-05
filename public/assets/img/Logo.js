import React from "react";
import html from "./Logo.html";

const Logo = () => {
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default Logo;
