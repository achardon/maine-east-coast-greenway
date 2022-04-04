import React, {useState, useEffect} from 'react'
import Table from "react-bootstrap/Table";
import DayContainer from './DayContainer';
import Button from "react-bootstrap/Button";

function TripContainer({ trip, deleteTrip, editDay, places }) {
  
  //for total mileage, should I use state or .reduce or useEffect of a regular funtion?  It is mostly working now but I sometimes get weird behavior where it doesn't update and other times when it does...?
  
  // const [totalMileage, setTotalMileage] = useState(0)

  //   useEffect(() => {
  //     const total = calculateTotal()
  //     console.log(total)
  //   }, [])

  // //calculate total mileage for trip
  // function calculateTotal() {
  //   const tripDays = trip.days;
  //   // console.log(tripDays);
  //   let total = 0;
  //   tripDays.map((day) => {
  //     total = total + day.mileage;
  //   });
  //   return total;
  // }
  // console.log(arrOfMileages)
  const tripDays = trip.days
  const initialValue = 0
  const total = tripDays.reduce((previousValue, currentValue) => previousValue + currentValue.mileage, initialValue)
  console.log(total)

  // Calculate milliseconds in a day
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Compute years
  const start = Date.parse(trip.start_date);
  const end = Date.parse(trip.end_date);

  let tripLength = Math.round(end / day) - Math.round(start / day) + 1;
  //   console.log(tripLength)

  //   console.log(day.day)
  //Why is this not returning the JSX below? The console log above works, but then no rows are on the page?
  //Should I be using .map? Do I need to turn the trip length into an array?
  //Each trip should have objects called days - then you can map over the days to create new rows.
  const date = new Date(day.day);
  // console.log(date)
  const dateFormatted = date.toDateString();

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
      </div>
    </div>
  );
}

export default TripContainer