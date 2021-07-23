import React from "react";
import HomePageCards from "./homePageCards";
import backgroundImage from "../images/matt-howard-UCDiLtfDRgU-unsplash.jpg";
import Banner from "./common/banner";
import Tagline from "./common/tagline";
import scrollToHomeFirstItem from "../js/scrollToHomeFirstItem";

const Home = () => {
  return (
    <div className="home">
      <Banner
        imgSource={backgroundImage}
        imgAlt="Background image full of waves"
      >
        <Tagline
          title="Welcome to the website of Calvin Yuen"
          subtitle="Only Home, Post and Contact are available now"
        />
        <button onClick={scrollToHomeFirstItem} className="banner__button">
          <div>Scroll Down</div>
          <i
            className="fa fa-chevron-down banner__button-icon"
            aria-hidden="true"
          ></i>
        </button>
      </Banner>
      <div className="container">
        <HomePageCards />
        <div style={{ height: 300 }}></div>
      </div>
    </div>
  );
};

export default Home;
