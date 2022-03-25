import React from 'react'

function Day( {day, dateFormatted, changeToEditMode} ) {
  // const myEventDate = new Date("Aug 10 2020 08:00:00 PDT");
  //below will be displayed in the time zone of the computer you are on
  // console.log(myEventDate.toString())


    return (
      <tr onClick={changeToEditMode}>
        <td>{dateFormatted}</td>
        <td>{day.start_point}</td>
        <td>{day.end_point}</td>
        <td>{day.mileage}</td>
      </tr>
    );
}

export default Day