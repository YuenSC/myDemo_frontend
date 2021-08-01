import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBody extends Component {
  render() {
    const { navBarItems, isExpand } = this.props;
    return (
      <div
        className={"navbar__body" + (isExpand ? " navbar__body--expanded" : "")}
      >
        <ul className="navbar__list">
          {navBarItems.map((navBarItem) => {
            if (!navBarItem.dropDownItems) {
              return this.renderLink(navBarItem);
            }
            return null;
            // return this.renderDropDownList(navBarItem);
          })}
        </ul>
      </div>
    );
  }

  renderLink(navBarItem) {
    return (
      <li className="navbar__listItem" key={navBarItem.label}>
        <Link className="navbar__link" to={navBarItem.link}>
          {navBarItem.label}
        </Link>
      </li>
    );
  }

  // renderDropDownList(navBarItem) {
  //   return (
  //     <li
  //       className="nav-item dropdown m-1 mx-3"
  //       key={navBarItem.label || navBarItem.icon}
  //     >
  //       <Link
  //         className="nav-link dropdown-toggle"
  //         id="navbarDropdown"
  //         data-bs-toggle="dropdown"
  //         to="/"
  //       >
  //         {navBarItem.label || (
  //           <i
  //             className={"fa " + navBarItem.icon + " nav-icon"}
  //             aria-hidden="true"
  //           />
  //         )}
  //       </Link>
  //       <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
  //         {navBarItem.dropDownItems.map((dropDownItem) => (
  //           <li key={dropDownItem.label}>
  //             <Link className="dropdown-item text-white" to={dropDownItem.link}>
  //               {dropDownItem.label}
  //             </Link>
  //           </li>
  //         ))}
  //       </ul>
  //     </li>
  //   );
  // }
}

export default NavBody;
