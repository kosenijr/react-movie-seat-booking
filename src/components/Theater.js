import Row from './Row';
import Seat from './Seat';

const Theater = ({ listItems, theater }) => {
    const log = console.log;
    log(listItems);

    // log(theater, ...theaters);

    // external for-loop that encompasses return statement
    // if (listItems[i].movie === theater.movie) {
    for (let i = 0; i < listItems.length; i++) {
        return (
            <div className="theater">
                <div className="screen"> </div>
                {listItems[i].seats.map((row, rowIndex) => {
                    row.map((seat, seatIndex) => {
                        <Row index={rowIndex} value={row}>
                            {/* {log()} */}
                            <Seat index={seatIndex} value={seat}>
                                {log()}
                            </Seat>
                        </Row>;
                    });
                })}
            </div>
        );
    }
};

export default Theater;

/*
NOTES
- issue with rendering as soon as page loads.
- issue logging 'The Lion King' as the first movie before selecting another movie.

*/
