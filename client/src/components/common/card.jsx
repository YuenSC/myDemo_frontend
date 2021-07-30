import React, { Component } from "react";
import "../../styles/card.css";

class Card extends Component {
  render() {
    const { title, content, imgSource, imgAlt } = this.props;
    return (
      <div className="myCard">
        <header className="myCard__header">
          <img className="myCard__image" src={imgSource} alt={imgAlt} />
        </header>
        <div className="myCard__body">
          <h3 className="myCard__title">{title}</h3>
          {content}
        </div>
      </div>
    );
  }
}

export default Card;
