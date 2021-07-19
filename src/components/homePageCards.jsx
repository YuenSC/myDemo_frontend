import React, { Component } from "react";
import Card from "./common/card";
import cards from "../services/fakeCardService";

class HomePageCards extends Component {
  render() {
    return (
      <div className="row">
        {cards.map((card) => (
          <div className="col-12 col-md-4" key={card.id}>
            <Card
              title={card.title}
              content={card.content}
              imgSource={card.image.default}
              imgAlt={card.alt}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default HomePageCards;
