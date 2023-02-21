import React, { useState } from 'react'
import Row from './Row';
import Seat from './Seat';

const Theater = ({ listItems, theater }) => {
    const [rows, setRows] = useState([]);
    const [seats, setSeats] = useState([]);
    const log = console.log;

    const handleRows = () => {

    }

    const handleSeats = () => {

    }
    listItems.map((area, areaIndex) => {
        if (listItems[areaIndex].movie === theater.movie) {
            area.seats.map((rows, rowsIndex) => {
                log(rows)
                rows.map((seats, seatsIndex) => {
                    log(seats)
                })
            })
        }
    })

    return (
        <div className="theater">
            <div className="screen"></div>

            <Row>
                <Seat></Seat>
            </Row>

        </div >
    )
};


export default Theater;




/*

NOTES

- issue with rendering as soon as page loads.

- issue logging 'The Lion King' as the first movie before selecting another movie.

 

*/