import React, {useState} from 'react'
import Day from './Day';
import EditDay from './EditDay';
import moment from 'moment';

function DayContainer({ trip_id, day, editDay, places }) {
  const [editMode, setEditMode] = useState(false);
  
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

// another way to work with JS dates - now instead I am using Moment.js
// const dateOfDay = new Date(day.day);
// const currentDayOfMonth = dateOfDay.getUTCDate();
// const currentMonth = dateOfDay.getUTCMonth(); 
// const currentYear = dateOfDay.getUTCFullYear();
// const dateFormatted =
//   currentMonth + 1 + "-" + currentDayOfMonth + "-" + currentYear;