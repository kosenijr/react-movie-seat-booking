import Row from './Row';
import Seat from './Seat';

const log = console.log;

const Theater = ({ listItems, theater }) => {
    // log(listItems, theater);

    // start nested map: 1st nest
    listItems.map((area, areaIndex) => {
        // check condition
        // log(listItems[areaIndex].movie === theater.movie, listItems[areaIndex].movie, theater.movie);

        if (listItems[areaIndex].movie === theater.movie) {
            // 2nd nest: rows
            return area.seats.map((rows, rowsIndex) => {
                // log(row, rowIndex);
                <div className="row" key={rowsIndex} value={rows}></div>;
                // 3rd nest: seats

                rows.map((seats, seatsIndex) => {
                    // log(seat, seatIndex);
                    // set up rows and seats.
                    <Seat key={seatsIndex} value={seats} />;
                });
            });
        }
    });
};

export default Theater;

/*
NOTES
- issue with rendering as soon as page loads.
- issue logging 'The Lion King' as the first movie before selecting another movie.

*/
