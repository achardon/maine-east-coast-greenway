import React from 'react'

function DayContainer( {day, dateFormatted} ) {

    function handleClick() {
        console.log(day.id)
    }

    return (
        <tr>
        <td>{dateFormatted}</td>
        <td>{day.start_point}</td>
        <td>{day.end_point}</td>
        <td>{day.mileage}</td>
        </tr>
    );
}

export default DayContainer