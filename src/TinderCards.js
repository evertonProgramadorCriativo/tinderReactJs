import React, { useState } from "react";
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople ] = useState([
        { 
            name: 'maria',
            url: 'https://burst.shopifycdn.com/photos/professional-smiling-woman.jpg?width=925&format=pjpg&exif=1&iptc=1'
        }, { 
            name: 'vanessa',
            url: 'https://burst.shopifycdn.com/photos/woman-in-jean-jacket.jpg?width=925&format=pjpg&exif=1&iptc=1'
        }
    ])
    return (
        <div>
            <h1>
                Tinder cards
            </h1>
            {people.map((person) => (
                <TinderCard
                className="swipe"
                key={person.name}>
                    <div style={{ backgroundImage: `url(${person.url})` }}
                    className="card">
                        <h3>{person.name}</h3>

                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default TinderCards;