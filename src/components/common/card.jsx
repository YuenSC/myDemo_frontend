import React, { Component } from "react";

class Card extends Component {
  render() {
    const { title, content, imgSource, altImgSource, imgAlt } = this.props;
    return (
      <div className="myCard">
        <header className="myCard__header">
          <picture>
            <source
              className="myCard__image"
              srcSet={imgSource}
              type="image/webp"
            />
            <source
              className="myCard__image"
              srcSet={altImgSource}
              type="image/jpg"
            />
            <img className="myCard__image" src={altImgSource} alt={imgAlt} />
          </picture>
          {/* <img className="myCard__image" src={altImgSource} alt={imgAlt} /> */}
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
