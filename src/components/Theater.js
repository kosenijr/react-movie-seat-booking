import Row from './Row';
import Seat from './Seat';

const Theater = ({ listItems, theater }) => {
    const log = console.log;
    // log(theater);

    // log(theater, ...theaters);

    // external for-loop that encompasses return statement
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].movie === theater.movie) {
            log(listItems[i], listItems[i].seats);
            listItems[i].seats.map((row, rowIndex) => {
                // conditional
                // log(row, rowIndex);
                // log(Array.isArray(row))
                row.map((seat, seatIndex) => {
                    // log(row, rowIndex);
                    // log(seat, seatIndex);
                    return (
                        <div className="theater">
                            <div className="screen"> </div>
                            <Row className="row" key={rowIndex} value={row}>
                                <Seat
                                    className="seat"
                                    key={seatIndex}
                                    value={seat}
                                ></Seat>
                            </Row>
                            ;
                        </div>
                    );
                });
            });
        }
    }
};

export default Theater;

/*
NOTES
- issue with rendering as soon as page loads.
- issue logging 'The Lion King' as the first movie before selecting another movie.

*/