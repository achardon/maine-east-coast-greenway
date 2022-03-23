import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import NewTripForm from './NewTripForm'
import TripContainer from './TripContainer'
import moment from 'moment'

function MyTrips( {user} ) {

  const [addingTrip, setAddingTrip] = useState(false)
  const [trips, setTrips] = useState([])
  // const [days, setDays] = useState([])

  useEffect(() => {
    fetch('/trips')
    .then(r => r.json())
    .then(data => setTrips(data))

    //  fetch("/days")
    //   .then((r) => r.json())
    //   .then((data) => setDays(data));
  }, [])

  function generateDays(tripLength, start_date) {
    //create days here
    const currentDay = new Date(start_date)
    const nextDay = new Date(start_date);
    // nextDay.setDate(currentDay.getDate() + 1)
    // console.log(currentDay)
    // console.log(nextDay)
    // console.log(moment(start_date).format("MMMM Do YYYY"));
    const days = []
    // const lengthArr = (Date.parse(start_date))..(Date.parse(end_date))
    for (let i = 0; i < tripLength; i++) {
      //adding 2 below because otherwise date is off by two days... something to do with UTC probably
      const dayToAdd = nextDay.setDate(currentDay.getDate() + i + 2)
      // console.log(dayToAdd)
      // console.log(nextDay.setDate(currentDay.getDate() + 1));
      days.push({
        day: moment(dayToAdd).format("dddd, MMMM Do YYYY"),
        start_point: "",
        end_point: "",
        mileage: "",
      });
    }
    console.log(days)
    return days
  }

  function createTrip(newTrip) {
    setAddingTrip(false)
    console.log(newTrip.start_date)
    const numDays = (Date.parse(newTrip.end_date) / 86400000) - (Date.parse(newTrip.start_date) / 86400000)
    console.log(numDays)
    const tripLength = numDays + 1
    console.log(tripLength)
    // let tripID = 0
    newTrip.days = generateDays(tripLength, newTrip.start_date)
    console.log(newTrip)
    fetch('/trips', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newTrip.name,
        start_date: newTrip.start_date,
        end_date: newTrip.end_date, 
        days_attributes: newTrip.days
      })
    })
    .then(r => r.json())
    .then(data => {
      setTrips([...trips, data])
      console.log(data)
      //this doesn't get set until after the next fetch (asynchronous? but why does the next fetch go faster?)
      // tripID = data.id
      //need to setDays here too but data.days does not give the information in the exact way we want...
    })
    // console.log(tripID)
    // for (let i = 0; i < tripLength; i++) {
    //   const date = newTrip.start_date 
    //   console.log(i)
    //   const newDay = {
    //     day: date,
    //     start_point: "",
    //     end_point: "",
    //     mileage: "",
    //     trip_id: tripID
    //   }
    //   fetch("/days", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(newDay),
    //   })
    //     .then((r) => r.json())
    //     .then((data) => {
    //       console.log(data)
    //       setDays([...days, data]);
    //     });
    // }
  }

  function handleCreateNewTrip() {
    setAddingTrip(!addingTrip)
  }

  function deleteTrip(trip) {
    console.log('delete trip')
    console.log(trip)
    fetch(`/trips/${trip.id}`, {
      method: "DELETE"
    })
    .then(setTrips(trips.filter(t => t.id !== trip.id)))
  }

  function editDay(updatedDay) {
    fetch(`/trips/${updatedDay.trip_id}/days/${updatedDay.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDay),
    })
      .then((r) => r.json())
      .then((data) => {
        // console.log(data)
        // debugger
        const tripToUpdate = trips.find(trip => trip.id === updatedDay.trip_id) 

        // console.log(tripToUpdate)

        const updatedDays = tripToUpdate.days.map(day => {
          if (day.id === data.id) {
            // debugger
            return data
          }
          else {
            return day
          }
        })

        tripToUpdate.days = updatedDays

        // console.log(tripToUpdate)

        const updatedTrips = trips.map(trip => {
          if (trip.id === tripToUpdate.id) {
            return tripToUpdate
          }
          else {
            return trip
          }
        })
        setTrips(updatedTrips)
      });
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

      {trips.length > 0 ? (
        trips.map((trip) => (
          <TripContainer
            key={trip.id}
            trip={trip}
            deleteTrip={deleteTrip}
            editDay={editDay}
            // days={days.filter((d) => d.trip.id === trip.id)}
          />
        ))
      ) : (
        <h2>You have no trips yet.</h2>
      )}
    </Container>
  );
}

export default MyTrips

