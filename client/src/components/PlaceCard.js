import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function PlaceCard( { place } ) {
  return (
    <>
      <Card style={{ width: "30rem" }} className="m-3">
        <Card.Body>
          <Card.Title>{place.name}</Card.Title>
          <Card.Img variant="top" src={place.image} />
          <Card.Text>{place.description}</Card.Text>
          <Card.Text>Mileage Marker: {place.location} miles</Card.Text>
          <Button variant="primary">Tell Me More!</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default PlaceCard