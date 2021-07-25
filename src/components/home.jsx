import React, { useRef } from "react";
import HomePageCards from "./homePageCards";
import backgroundImage from "../images/matt-howard-UCDiLtfDRgU-unsplash.jpg";
import Banner from "./common/banner";
import Tagline from "./common/tagline";

const Home = () => {
  const homeContainerRef = useRef();

  const scrollToHomeFirstItem = () => {
    const stickyNavBarHeight = document.querySelector(".navbar").offsetHeight;
    window.scroll(0, homeContainerRef.current.offsetTop - stickyNavBarHeight);
  };

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
      <div className="container" ref={homeContainerRef}>
        <HomePageCards />
        <div style={{ height: 300 }}></div>
      </div>
    </div>
  );
};

export default Home;
