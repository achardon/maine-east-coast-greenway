import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import NewTripForm from './NewTripForm'

function MyTrips() {

  const [addingTrip, setAddingTrip] = useState(false)

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
    .then(data => console.log(data))
  }

  function handleCreateNewTrip() {
    setAddingTrip(!addingTrip)
  }

  return (
    <Container style={{ padding: "40px" }} className="text-center">
      <h1>My Trips</h1>

        <div style={{ padding: "40px" }}>
            {addingTrip ? null : <Button onClick={handleCreateNewTrip}>Create New Trip</Button>}
            {addingTrip ? <NewTripForm createTrip={createTrip}/> : null}
        </div>

      <div style={{ padding: "40px" }}>
        <h3>Example</h3>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Day #</th>
              <th>Start Point</th>
              <th>End Point</th>
              <th>Mileage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Kittery</td>
              <td>Kennebunk</td>
              <td>37</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Kennebunk</td>
              <td>Portland</td>
              <td>30</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Portland</td>
              <td>Freeport</td>
              <td>18</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default MyTrips