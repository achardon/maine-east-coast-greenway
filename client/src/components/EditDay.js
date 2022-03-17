import React, {useState} from 'react'

function EditDay({ day, dateFormatted, handleEdit }) {

    const [updatedDay, setUpdatedDay] = useState({
        
    })
    
    function setStartPoint(e) {
        console.log('set start point')
    }

  return (
      <tr>
        <td>{dateFormatted}</td>
        <td>
          <input
            value={day.start_point}
            onChange={setStartPoint}
          />
          {/* {day.start_point} */}
        </td>
        <td>{day.end_point}</td>
        <td>{day.mileage}</td>
        <td>
            <button onClick={handleEdit}>Done Editing</button>
        </td>
      </tr>
  );
}

export default EditDay