import React, { Component } from "react";

import NavBody from "./common/navBody";
import NavBrand from "./common/navBrand";
import NavToggler from "./common/navToggler";

class NavBar extends Component {
  state = {
    navBarItems: [
      { label: "Home", link: "/" },
      { label: "Images", link: "/images" },
      { label: "Contact", link: "/contact" },
      { label: "link", link: "/link" },
      {
        label: "myPortal",
        dropDownItems: [
          { label: "Student Intranet", link: "/studnetintranet" },
          { label: "Staff Admin Intranet", link: "/staffintranet" },
        ],
      },
      {
        label: "",
        icon: "fa-globe",
        dropDownItems: [
          { label: "中文", link: "/" },
          { label: "English", link: "/" },
        ],
      },
    ],
    isExpand: false,
  };

  handleToggle = (e) => {
    this.setState({ isExpand: !this.state.isExpand });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="navbar__header">
          <NavBrand />
          <NavToggler onClick={this.handleToggle} />
        </div>
        <NavBody
          isExpand={this.state.isExpand}
          navBarItems={this.state.navBarItems}
        />
      </nav>
    );
  }
}
export default NavBar;
