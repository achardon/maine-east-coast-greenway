import React, {useState} from 'react'

function EditDay({ day, dateFormatted, editDay, editMode, setEditMode, trip_id, places }) {
  // debugger
    // console.log(day)
    const [updatedDay, setUpdatedDay] = useState({
        id: day.id,
        day: day.day,
        start_point: day.start_point,
        end_point: day.end_point,
        mileage: day.mileage,
        notes: day.notes,
        accommodations: day.accommodations,
        trip_id: trip_id
    })

    // console.log(updatedDay)
    
    function handleChange(e) {
        setUpdatedDay({...updatedDay, 
            [e.target.name]: e.target.value
        })
    }
    
    function calculateMileage() {
      const start = places.find((place) =>
        updatedDay.start_point.toLowerCase().includes(place.name.toLowerCase())
      );
      const end = places.find((place) =>
        updatedDay.end_point.toLowerCase().includes(place.name.toLowerCase())
      );
      if (updatedDay.mileage === 0 && start && end) {
        const mileage = end.location - start.location;
        return mileage;
      } 
      else if (updatedDay.start_point !== day.start_point || updatedDay.end_point !== updatedDay.end_point) {
        if (start && end) {
          const mileage = end.location - start.location;
          return mileage;
        }
        else {
          return 0
        }
      } 
      else if (!start || !end) {
        return 0;
      } else {
        return updatedDay.mileage;
      }
    }

    function handleEdit(updatedDay) {
      //calculate mileage
        console.log(updatedDay)  
        updatedDay.mileage = calculateMileage()
        console.log(updatedDay)
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
          Save
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
        {/* {day.mileage > 0 ? (
          day.mileage
        ) : (
          <input
            value={updatedDay.mileage}
            name="mileage"
            onChange={handleChange}
          />
        )} */}
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
      <td>
        <input
          value={updatedDay.accommodations}
          name="accommodations"
          onChange={handleChange}
        />
      </td>
      <td>
        <input value={updatedDay.notes} name="notes" onChange={handleChange} />
      </td>
    </tr>
  );
}

//Can I add an onClick for the 'enter' key for the edit funciton so you can just click enter instead of 'done editing'?

export default EditDay