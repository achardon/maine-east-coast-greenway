import React, {useState} from 'react'
import Day from './Day';
import EditDay from './EditDay';

function DayContainer({ day, editDay }) {
  const [editMode, setEditMode] = useState(false);

  //the next few lines from MDN
  const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
  // Results below assume UTC timezone - your results may vary

  // Specify default date formatting for language (locale)
  console.log(new Intl.DateTimeFormat("en-US").format(date));
  // expected output: "12/20/2020" --> why am I getting 12/19 in the console??

  const dateOfDay = new Date(day.day);
  console.log(dateOfDay)
  const currentDayOfMonth = dateOfDay.getUTCDate();
  const currentMonth = dateOfDay.getUTCMonth(); 
  const currentYear = dateOfDay.getUTCFullYear();
  const dateFormatted =
    currentMonth + 1 + "-" + currentDayOfMonth + "-" + currentYear;
  console.log(dateFormatted)

  // const usFormatter = new Intl.DateTimeFormat("en-US");
  // console.log(day.day);
  // console.log(usFormatter.format(dateFormatted));

  function changeToEditMode() {
    setEditMode(!editMode);
  }

  return (
    <>
      {editMode ? (
        <EditDay
          day={day}
          dateFormatted={dateFormatted}
          editDay={editDay}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      ) : (
        <Day
          day={day}
          dateFormatted={dateFormatted}
          changeToEditMode={changeToEditMode}
        />
      )}
    </>
  );
}

export default DayContainer