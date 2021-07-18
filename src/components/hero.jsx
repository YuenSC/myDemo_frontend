import React, { Component } from "react";
import video from "../video/hero_video.mp4";

import "../styles/hero.css";
import HeroVideo from "./heroVideo";

class Hero extends Component {
  state = {};
  render() {
    return (
      <div className="hero">
        <HeroVideo videoSource={video} />
      </div>
    );
  }
}

export default Hero;
