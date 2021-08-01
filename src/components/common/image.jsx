import React from "react";

const Image = ({ photo }) => {
  return (
    <img className="image" src={photo.urls.thumb} alt={photo.alt_description} />
  );
};

export default Image;
