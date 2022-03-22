import React, {useState} from 'react'
import Table from "react-bootstrap/Table";
import DayContainer from './DayContainer';
import Button from "react-bootstrap/Button";
import EditDay from './EditDay';


function TripContainer( {trip, deleteTrip, editDay} ) {

  // Calculate milliseconds in a day
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Compute years
  const start = Date.parse(trip.start_date);
  const end = Date.parse(trip.end_date);

  let tripLength = Math.round(end / day) - Math.round(start / day) + 1
//   console.log(tripLength)

    //   console.log(day.day)
      //Why is this not returning the JSX below? The console log above works, but then no rows are on the page?
        //Should I be using .map? Do I need to turn the trip length into an array? 
        //Each trip should have objects called days - then you can map over the days to create new rows. 
        const date = new Date(day.day)
        // console.log(date)
        const dateFormatted = date.toDateString()

  return (
    <div style={{ padding: "40px" }}>
      <h3>{trip.name}</h3>
      <Button onClick={() => deleteTrip(trip)} variant="danger" size="sm">
        Delete Trip
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Day</th>
            <th>Start Point</th>
            <th>End Point</th>
            <th>Mileage</th>
          </tr>
        </thead>
        <tbody>{trip.days.map((day) => <DayContainer key={day.id} day={day} editDay={editDay}/>)}</tbody>
      </Table>
    </div>
  );
}

export default TripContainer