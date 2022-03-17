import React from 'react'

function Day( {day, dateFormatted, handleEdit} ) {
    return (
      <tr onClick={handleEdit}>
        <td>{dateFormatted}</td>
        <td>{day.start_point}</td>
        <td>{day.end_point}</td>
        <td>{day.mileage}</td>
      </tr>
    );
}

export default Day