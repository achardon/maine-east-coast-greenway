import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function StoryCard( {story} ) {

    const [selectedColor, setSelectedColor] = useState("white");

    function handleClick(e, story) {
        if (selectedColor === "white") {
            setSelectedColor("orange");
        } else {
            setSelectedColor("white");
        }
    }

    return (
      <div>
        <Card
          key={story.id}
          style={{ width: "30rem", backgroundColor: selectedColor }}
          className="m-3"
          onClick={(e) => handleClick(e, story)}
        >
          <Card.Body>
            <Card.Title>{story.date}</Card.Title>
            <Card.Img
              variant="top"
              src={
                "https://static.owayo-cdn.com/newhp/img/magazin/planningbiketrip/expert-tips-for-planning-your-bike-trip-670px.jpg"
              }
              height="280px"
              alt="picture of bike"
            />
            <Card.Text>{story.narrative}</Card.Text>
            <Card.Text>
              <strong>-{story.name}</strong>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
}

export default StoryCard
