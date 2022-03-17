import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import NewTripForm from './NewTripForm'
import TripContainer from './TripContainer'

function MyTrips( {user} ) {

  const [addingTrip, setAddingTrip] = useState(false)
  const [trips, setTrips] = useState([])
  const [days, setDays] = useState([])

  useEffect(() => {
    fetch('/trips')
    .then(r => r.json())
    .then(data => setTrips(data))

     fetch("/days")
      .then((r) => r.json())
      .then((data) => setDays(data));
  }, [])

  function createTrip(newTrip) {
    setAddingTrip(false)
    fetch('/trips', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTrip)
    })
    .then(r => r.json())
    .then(data => setTrips([...trips, data]))
  }

  function handleCreateNewTrip() {
    setAddingTrip(!addingTrip)
  }

  return (
    <Container style={{ padding: "40px" }} className="text-center">
      <h1>My Trips</h1>

      <div style={{ padding: "40px" }}>
        {addingTrip ? null : (
          <Button onClick={handleCreateNewTrip}>Create New Trip</Button>
        )}
        {addingTrip ? <NewTripForm createTrip={createTrip} /> : null}
      </div>
      
      {trips.length > 0
        ? trips.map((trip) => (
            <TripContainer
              key={trip.id}
              trip={trip}
              days={days.filter((d) => d.trip.id === trip.id)}
            />
          ))
        : null}
    </Container>
  );
}

export default MyTrips

