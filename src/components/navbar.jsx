import React, { Component } from "react";

import "../styles/navbar.css";
import NavBody from "./navBody";

class NavBar extends Component {
  state = {
    navBarItems: [
      { label: "Home", link: "/" },
      { label: "Post", link: "/posts" },
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
  };

  render() {
    return (
      <nav className="navbar navbar-expand-md sticky-top fs-3">
        <div className="container justify-content-end">
          {this.getNavButton()}
          <NavBody navBarItems={this.state.navBarItems} />
        </div>
      </nav>
    );
  }

  getNavButton() {
    return (
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    );
  }
}

export default NavBar;
