import React, { useEffect, useState } from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function PlaceCard( { place } ) {

    const [breweries, setBreweries] = useState([])
    const [details, setDetails] = useState(false)

    useEffect(() => {
        fetch(
          `https://api.openbrewerydb.org/breweries?by_city=${place.name}&by_state=maine`
        )
        .then(r => r.json())
        .then(data => setBreweries(data))
    }, [])

    function handleClick() {
        setDetails(!details)
    }

  return (
    <>
      <Card style={{ width: "30rem" }} className="m-3">
        <Card.Body>
          <Card.Title>{place.name}</Card.Title>
          <Card.Img variant="top" src={place.image} />
          <Card.Text>{place.description}</Card.Text>
          <Card.Text>Mileage Marker: {place.location} miles</Card.Text>
          <Button onClick={handleClick} variant="primary">
            {details ? "Hide Details" : "Tell Me More!"}
          </Button>
          {details ? (
            <Card.Text>
              <strong>Breweries in this Town:</strong>
              {breweries.map((b) => (
                <li key={b.id}>{b.name}</li>
              ))}
            </Card.Text>
          ) : null}
        </Card.Body>
      </Card>
    </>
  );
}

export default PlaceCard