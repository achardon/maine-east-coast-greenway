import React from 'react'
import Table from "react-bootstrap/Table";


function TripContainer( {trip} ) {

console.log(trip)

    const length = trip.end_date - trip.start_date
    console.log(length)

  return (
    <div style={{ padding: "40px" }}>
      <h3>{trip.name}</h3>

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
  );
}

export default TripContainer