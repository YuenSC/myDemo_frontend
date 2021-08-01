import React, { useState } from "react";
import Images from "./common/images";
import SearchBox from "./common/searchBox";

const ImagesPage = () => {
  const [query, setQuery] = useState("");
  const [submitQuery, setSubmitQuery] = useState("");

  const handleSubmit = (e) => {
    setSubmitQuery(query);
    e.preventDefault();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="container">
      <SearchBox
        query={query}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <Images query={submitQuery} />
    </div>
  );
};

export default ImagesPage;
