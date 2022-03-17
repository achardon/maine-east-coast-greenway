import React, {useState} from 'react'
import Day from './Day';
import EditDay from './EditDay';

function DayContainer( {day, dateFormatted} ) {

    const [editMode, setEditMode] = useState(false)
    const [dayToDisplay, setDayToDisplay] = useState(day)

    function changeToEditMode() {
        setEditMode(!editMode)
    }

    function handleEdit(updatedDay) {
        fetch(`/days/${updatedDay.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedDay)
        })
        .then(r => r.json())
        .then(data => setDayToDisplay(data))
        setEditMode(!editMode)
    }

    console.log(day)
    console.log(dayToDisplay)
    //Something weird happening with passing dayToDisplay instead of day to EditDay... what is going on??

    return (
      <>
        {editMode ? (
          <EditDay day={day} dateFormatted={dateFormatted} handleEdit={handleEdit}/>
        ) : (
          <Day day={dayToDisplay} dateFormatted={dateFormatted} changeToEditMode={changeToEditMode}/>
        )}
      </>
    );
}

export default DayContainer