import React, {useState} from 'react'

function EditDay({ day, dateFormatted, editDay, editMode, setEditMode }) {

    // console.log(day)
    const [updatedDay, setUpdatedDay] = useState({
        id: day.id,
        day: day.day,
        start_point: day.start_point,
        end_point: day.end_point,
        mileage: day.mileage,
        notes: day.notes,
        trip_id: day.trip.id
    })

    // console.log(updatedDay)
    
    function handleChange(e) {
        setUpdatedDay({...updatedDay, 
            [e.target.name]: e.target.value
        })
    }
    
    function handleEdit(updatedDay) {
        editDay(updatedDay)
        setEditMode(!editMode);
    }

  return (
    <tr>
      <td>{dateFormatted}</td>
      <td>
        <input value={updatedDay.start_point} name="start_point" onChange={handleChange} />
      </td>
      <td>
        <input value={updatedDay.end_point} name="end_point" onChange={handleChange} />
      </td>
      <td>
        <input value={updatedDay.mileage} name="mileage" onChange={handleChange} />
      </td>
      <td>
        <button onClick={() => handleEdit(updatedDay)}>Done Editing</button>
      </td>
    </tr>
  );
}

export default EditDay