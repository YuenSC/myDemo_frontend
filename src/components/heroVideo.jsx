import React from "react";

const HeroVideo = ({ videoSource }) => {
  return (
    <video className="hero__video" autoPlay muted loop>
      <source src={videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default HeroVideo;
