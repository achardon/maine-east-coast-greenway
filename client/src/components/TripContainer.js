import React, {useState, useEffect} from 'react'
import Table from "react-bootstrap/Table";
import DayContainer from './DayContainer';
import Button from "react-bootstrap/Button";

function TripContainer({ trip, deleteTrip, editDay, places }) {

  const tripDays = trip.days;
  const initialValue = 0;
  const total = tripDays.reduce((previousValue, currentValue) => previousValue + currentValue.mileage, initialValue)

  
  return (
    <div style={{ padding: "40px" }}>
      <h3>{trip.name}</h3>
      <h5>Total Mileage: {total} miles</h5>
      <Button onClick={() => deleteTrip(trip)} variant="danger" size="sm">
        Delete Trip
      </Button>
      <div style={{ padding: "20px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Day</th>
              <th>Start Point</th>
              <th>End Point</th>
              <th>Mileage</th>
              <th>Accommodations</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {trip.days.map((day) => (
              <DayContainer
              key={day.id}
              trip_id={trip.id}
              day={day}
              editDay={editDay}
              places={places}
              />
              ))}
          </tbody>
        </Table>
        <em>Click on any day to edit.</em>   
      </div>
    </div>
  );
}

export default TripContainer

// below is another way to calculate trip length (now this is done in the MyTrips component when generating days)

// // Calculate milliseconds in a day
// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;

// // Compute years
// const start = Date.parse(trip.start_date);
// const end = Date.parse(trip.end_date);

// let tripLength = Math.round(end / day) - Math.round(start / day) + 1;

// const date = new Date(day.day);
// const dateFormatted = date.toDateString();
