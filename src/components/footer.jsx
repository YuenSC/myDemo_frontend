import React, { Component } from "react";
import scrollToTop from "../js/scrollToTop";
import "../styles/footer.css";

class Footer extends Component {
  state = {
    links: [
      { id: 1, label: "About Me", href: "https://www.youtube.com/" },
      { id: 2, label: "My work", href: "https://www.youtube.com/" },
      { id: 3, label: "All", href: "https://www.youtube.com/" },
      { id: 4, label: "link", href: "https://www.youtube.com/" },
      { id: 5, label: "goes", href: "https://www.youtube.com/" },
      {
        id: 6,
        label: "to",
        href: "https://www.youtube.com/",
        noline: true,
      },
      { id: 7, lineBreak: true },
      { id: 8, label: "youtube", href: "https://www.youtube.com/" },
      { id: 9, label: "haha", href: "https://www.youtube.com/" },
    ],

    icons: [
      {
        id: 1,
        iconHref: "https://img.icons8.com/color/48/000000/linkedin.png",
        href: "https://www.linkedin.com/",
        noline: true,
      },
      {
        id: 2,
        iconHref: "https://img.icons8.com/color/48/000000/google-logo.png",
        href: "https://www.google.com/",
        noline: true,
      },
      {
        id: 3,
        iconHref: "https://img.icons8.com/color/50/000000/facebook-new.png",
        href: "https://www.facebook.com/",
        noline: true,
      },
      {
        id: 4,
        iconHref:
          "https://img.icons8.com/material-outlined/48/000000/github.png",
        href: "https://github.com/",
        noline: true,
      },
    ],
  };

  render() {
    return (
      <div className="footer container">
        <div className="row">
          <div className="col-sm footer__container footer__container--right">
            {this.renderToTopButton()}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 footer__container footer__container--left">
            {this.renderFooterList(this.state.links)}
          </div>
          <div className="col-md-6 footer__container footer__container--right">
            {this.renderFooterList(this.state.icons)}
          </div>
        </div>
      </div>
    );
  }

  renderToTopButton() {
    return (
      <div onClick={scrollToTop} className="footer__link">
        Back to the top
        <i className="fa fa-arrow-up footer__icon" aria-hidden="true"></i>
      </div>
    );
  }

  renderFooterList(items) {
    return (
      <ul className="footer__list">
        {items.map(({ id, label, href, noline, lineBreak, iconHref }) => {
          if (lineBreak)
            return (
              <li className="footer__item footer__lineBreak" key={id}></li>
            );
          return (
            <li
              className={"footer__item" + (noline ? " footer__noline" : "")}
              key={id}
            >
              <a
                className="footer__link"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                {label || (
                  <img
                    src={iconHref}
                    alt={"An icon from the website " + iconHref}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Footer;
