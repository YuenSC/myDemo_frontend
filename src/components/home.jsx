import React from "react";
import Card from "./common/card";
import cards from "../services/fakeCardService";

const Home = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Home;
