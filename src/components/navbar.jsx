import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/navbar.css";

class NavBar extends Component {
  state = {
    navBarItems: [
      { label: "Home", link: "/" },
      { label: "Post", link: "/posts" },
      { label: "Event", link: "/event" },
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
      <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-darkBlue fw-bolder fs-3">
        <div className="container justify-content-end">
          {this.getNavButton()}
          {this.getNavBody()}
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

  getNavBody = () => {
    return (
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarCollapse"
      >
        <ul className="navbar-nav mb-2 mb-md-0">
          {this.state.navBarItems.map((navBarItem) => {
            if (!navBarItem.dropDownItems) {
              return this.renderLink(navBarItem);
            }
            return this.renderDropDownList(navBarItem);
          })}
        </ul>
      </div>
    );
  };

  renderLink(navBarItem) {
    return (
      <li className="nav-item m-1 mx-3" key={navBarItem.label}>
        <Link className="nav-link" to={navBarItem.link}>
          {navBarItem.label}
        </Link>
      </li>
    );
  }

  renderDropDownList(navBarItem) {
    return (
      <li
        className="nav-item dropdown m-1 mx-3"
        key={navBarItem.label || navBarItem.icon}
      >
        <Link
          className="nav-link dropdown-toggle"
          id="navbarDropdown"
          data-bs-toggle="dropdown"
          to="/"
        >
          {navBarItem.label || (
            <i
              className={"fa " + navBarItem.icon + " nav-icon"}
              aria-hidden="true"
            />
          )}
        </Link>
        <ul
          className="dropdown-menu bg-darkBlue"
          aria-labelledby="navbarDropdown"
        >
          {navBarItem.dropDownItems.map((dropDownItem) => (
            <li key={dropDownItem.label}>
              <Link className="dropdown-item text-white" to={dropDownItem.link}>
                {dropDownItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }
}

export default NavBar;
