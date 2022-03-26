import React, {useState} from 'react'

function EditDay({ day, dateFormatted, editDay, editMode, setEditMode, trip_id }) {
  // debugger
    // console.log(day)
    const [updatedDay, setUpdatedDay] = useState({
        id: day.id,
        day: day.day,
        start_point: day.start_point,
        end_point: day.end_point,
        mileage: day.mileage,
        notes: day.notes,
        trip_id: trip_id
    })

    // console.log(updatedDay)
    
    function handleChange(e) {
        setUpdatedDay({...updatedDay, 
            [e.target.name]: e.target.value
        })
    }
    
    function handleEdit(updatedDay) {
        editDay(updatedDay)
        setEditMode(editMode => !editMode);
    }

  return (
    <tr>
      <td>
        {dateFormatted}
        <button
          className="btn btn-success btn-sm rounded-0 m-1"
          onClick={() => handleEdit(updatedDay)}
        >
          Done Editing
        </button>
      </td>
      <td>
        <input
          value={updatedDay.start_point}
          name="start_point"
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          value={updatedDay.end_point}
          name="end_point"
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          value={updatedDay.mileage}
          name="mileage"
          onChange={handleChange}
        />

        {/* <button
          class="btn btn-success btn-sm rounded-0"
          type="button"
          data-toggle="tooltip"
          data-placement="top"
          title="Edit"
        >
          <i class="fa fa-edit"></i>
        </button> */}
      </td>
    </tr>
  );
}

//Can I add an onClick for the 'enter' key for the edit funciton so you can just click enter instead of 'done editing'?

export default EditDay