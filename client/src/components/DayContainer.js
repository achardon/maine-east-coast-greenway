import React, {useState} from 'react'
import Day from './Day';
import EditDay from './EditDay';

function DayContainer( {day, dateFormatted} ) {

    const [editMode, setEditMode] = useState(false)

    function handleClick() {
        console.log(day.id)
    }

    function handleEdit() {
        setEditMode(!editMode)
    }

    return (
      <>
        {editMode ? (
          <EditDay day={day} dateFormatted={dateFormatted} handleEdit={handleEdit}/>
        ) : (
          <Day day={day} dateFormatted={dateFormatted} handleEdit={handleEdit}/>
        )}
      </>
    );
}

export default DayContainer