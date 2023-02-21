import Row from './Row';
import Seat from './Seat';

const Theater = ({ listItems, theater }) => {
    const log = console.log

    return (
        <div className="theater">
            <div className="screen"></div>

            {listItems.map((area, areaIndex) => {
                if (listItems[areaIndex].movie === theater.movie) {
                    return area.seats.map((rows, rowsIndex) => {
                        log(rows, rowsIndex);
                        return (
                            <div key={rowsIndex} value={rows} className='row'>
                                {rows.map((seats, seatsIndex) => {
                                    // log(seats, seats.id)
                                    return <div key={seatsIndex} value={seats} className='seat'></div>
                                })}
                            </div>
                        )
                    })
                }
                return null
            })}
        </div >
    )
};


export default Theater;




/*

NOTES

- issue with rendering as soon as page loads.

- issue logging 'The Lion King' as the first movie before selecting another movie.

 

*/