import React from "react";
import HomePageCards from "./homePageCards";
import backgroundImage from "../images/matt-howard-UCDiLtfDRgU-unsplash.jpg";
import Banner from "./common/banner";
import Tagline from "./common/tagline";

const Home = () => {
  return (
    <div>
      <Banner
        imgSource={backgroundImage}
        imgAlt="Background image full of waves"
      >
        <Tagline
          title="Welcome to the website of Cavlin Yuen"
          subtitle="Only Home, Post and Contact are available now"
        />
      </Banner>
      <div className="container">
        <HomePageCards />
      </div>
    </div>
  );
};

export default Home;
