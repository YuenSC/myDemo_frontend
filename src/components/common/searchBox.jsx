import React from "react";

const SearchBox = ({ query, onSubmit, onChange }) => {
  return (
    <form className="form m-3 w-50" onSubmit={onSubmit}>
      <div className="input-group mb-3">
        <input
          className="form-control"
          onChange={onChange}
          placeholder="Search"
          type="text"
          value={query}
        ></input>
        <button className="btn btn-primary" type="submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
