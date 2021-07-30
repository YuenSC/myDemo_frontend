import React from "react";
import "../../styles/banner.css";

const Banner = ({ imgSource, children }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imgSource})` }}>
      {children}
    </div>
  );
};

export default Banner;
