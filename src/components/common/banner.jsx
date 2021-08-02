import React from "react";

const Banner = ({ imgSource, children }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imgSource})` }}>
      {children}
    </div>
  );
};

export default Banner;
