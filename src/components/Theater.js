import Row from './Row';
import Seat from './Seat';

const Theater = ({ listItems, theater }) => {
    const log = console.log;
    // log(theater);

    // log(theater, ...theaters);

    // external for-loop that encompasses return statement
    for (let i = 0; i < listItems.length; i++) {

        return (
            <div className="theater">
                <div className="screen"> </div>

                {
                   listItems[i].seats.map((row, rowIndex) => {
                    // log(row, rowIndex);
                    // log(Array.isArray(row))
                    row.map((seat, seatIndex) => {
                        log(row, rowIndex);
                        log(seat, seatIndex);
                    })
                   }) 
                }
                <Row>
                    <Seat> </Seat>
                </Row>
            </div>
        );
    }
};

export default Theater;
