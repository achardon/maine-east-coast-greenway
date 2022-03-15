import React from 'react'
import Table from "react-bootstrap/Table";


function TripContainer( {trip} ) {
  console.log(trip)
  // Calculate milliseconds in a day
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Compute years
  const start = Date.parse(trip.start_date);
  const end = Date.parse(trip.end_date);

  let tripLength = Math.round(end / day) - Math.round(start / day) + 1
  console.log(tripLength)

  function createDays() {
      console.log(trip.name)
      //Why is this not returning the JSX below? The console log above works, but then no rows are on the page?
        //Should I be using .map? Do I need to turn the trip length into an array? 
        //Each trip should have objects called days - then you can map over the days to create new rows. 
            return (
              <tr>
                <td>1</td>
                <td>Kittery</td>
                <td>Kennebunk</td>
                <td>37</td>
              </tr>
            )
    
  }

  function createTable() {
          for (let i = 0; i < tripLength; i++) {
              createDays()
          }
  }

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
            {createTable()}
          {/* <tr>
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
          </tr> */}
        </tbody>
      </Table>
    </div>
  );
}

export default TripContainer