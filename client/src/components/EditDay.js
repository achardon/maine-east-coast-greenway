import React from 'react'

function EditDay({ day, dateFormatted }) {
  return (
      <form>
        <tr>
            <td>{dateFormatted}</td>
            <td>{day.start_point}</td>
            <td>{day.end_point}</td>
            <td>{day.mileage}</td>
        </tr>
      </form>
  );
}

export default EditDay