import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "maria",
      url: "https://burst.shopifycdn.com/photos/professional-smiling-woman.jpg?width=925&format=pjpg&exif=1&iptc=1",
    },
    {
      name: "vanessa",
      url: "https://burst.shopifycdn.com/photos/woman-in-jean-jacket.jpg?width=925&format=pjpg&exif=1&iptc=1",
    },
  ]);
  return (
    <div>
      <h1>Tinder cards</h1>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
