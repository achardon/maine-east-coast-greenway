import React, {useState} from 'react'
import Day from './Day';
import EditDay from './EditDay';
import moment from 'moment';

function DayContainer({ trip_id, day, editDay, places }) {
  const [editMode, setEditMode] = useState(false);
  
  // function calculateMileage() {
  //   const start = places.find((place) => day.start_point.toLowerCase().includes(place.name.toLowerCase()));
  //   const end = places.find((place) => day.end_point.toLowerCase().includes(place.name.toLowerCase()));
  //   if (day.mileage === 0 && start && end) {
  //     const mileage = end.location - start.location;
  //     return mileage;
  //     //patch request to days to update mileage?
  //   }
  //   else {
  //     return day.mileage
  //   }
  // }
  
  // day.mileage = calculateMileage()

  function changeToEditMode() {
    setEditMode(!editMode);
  }
  
  return (
    <>
      {editMode ? (
        <EditDay
        day={day}
        trip_id={trip_id}
        dateFormatted={moment(day.day).format("ddd - MM/D/YYYY")}
        editDay={editDay}
        editMode={editMode}
        setEditMode={setEditMode}
        places={places}
        />
        ) : (
          <Day
          day={day}
          trip_id={trip_id}
          dateFormatted={moment(day.day).format("ddd - MM/D/YYYY")}
          changeToEditMode={changeToEditMode}
          />
          )}
    </>
  );
}

export default DayContainer

// working with JS dates - now instead I am using Moment.js
// const dateOfDay = new Date(day.day);
// const currentDayOfMonth = dateOfDay.getUTCDate();
// const currentMonth = dateOfDay.getUTCMonth(); 
// const currentYear = dateOfDay.getUTCFullYear();
// const dateFormatted =
//   currentMonth + 1 + "-" + currentDayOfMonth + "-" + currentYear;