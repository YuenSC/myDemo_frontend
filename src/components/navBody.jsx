import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBody extends Component {
  render() {
    const { navBarItems } = this.props;
    return (
      <div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarCollapse"
        >
          <ul className="navbar-nav mb-2 mb-md-0">
            {navBarItems.map((navBarItem) => {
              if (!navBarItem.dropDownItems) {
                return this.renderLink(navBarItem);
              }
              return this.renderDropDownList(navBarItem);
            })}
          </ul>
        </div>
      </div>
    );
  }

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
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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

export default NavBody;
