import React from "react";
import "../../styles/banner.css";

const Banner = ({ imgSource, imgAlt, children }) => {
  return (
    <div
      className="banner display-1"
      style={{ backgroundImage: `url(${imgSource})` }}
    >
      {children}
    </div>
  );
};

export default Banner;
