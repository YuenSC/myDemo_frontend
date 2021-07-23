import React from "react";
import { Link } from "react-router-dom";

const NavBrand = () => {
  return (
    <div className="navbar__brand">
      <Link to="/">
        <i className="fa fa-handshake-o" aria-hidden="true"></i>
      </Link>
    </div>
  );
};

export default NavBrand;
