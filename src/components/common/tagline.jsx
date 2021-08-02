import React from "react";

const Tagline = ({ title, subtitle }) => {
  return (
    <div className="tagline">
      <div className="tagline__title" data-aos="fade-down">
        {title}
      </div>
      <div
        className="tagline__subtitle"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        {subtitle}
      </div>
    </div>
  );
};

export default Tagline;
