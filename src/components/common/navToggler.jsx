import React from "react";

const NavToggler = ({ onClick }) => {
  return (
    <button onClick={onClick} className="navbar__toggler">
      <i className="fa fa-bars"></i>
    </button>
  );
};

export default NavToggler;
