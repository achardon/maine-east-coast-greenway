import React, {useState} from 'react'
import Day from './Day';
import EditDay from './EditDay';

function DayContainer( {day, dateFormatted, editDay} ) {

    const [editMode, setEditMode] = useState(false)

    function changeToEditMode() {
        setEditMode(!editMode)
    }

    return (
      <>
        {editMode ? (
          <EditDay day={day} dateFormatted={dateFormatted} editDay={editDay} editMode={editMode} setEditMode={setEditMode}/>
        ) : (
          <Day day={day} dateFormatted={dateFormatted} changeToEditMode={changeToEditMode}/>
        )}
      </>
    );
}

export default DayContainer