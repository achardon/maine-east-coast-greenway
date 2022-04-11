import React from 'react'

function Day( {day, dateFormatted, changeToEditMode} ) {

    return (
      <tr onClick={changeToEditMode}>
        <td>{dateFormatted}</td>
        <td>{day.start_point}</td>
        <td>{day.end_point}</td>
        <td>{day.mileage}</td>
        <td>{day.accommodations}</td>
        <td>{day.notes}</td>
      </tr>
    );
}

export default Day