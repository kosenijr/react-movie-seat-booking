<<<<<<< HEAD
import Row from './Row'
import Seat from './Seat'

const log = console.log;


const Theater = () => {
=======
const Theater = ({ listItems }) => {
    const log = console.log;

    // multilayered for loop for navigation
    listItems.map((theater) => {
        for (let k = 0; k < theater.seats.length; k++) { // first layer
            // log(k);
            const rows = theater.seats;
            for (let o = 0; o < rows[k].length; o++) { //second layer
                log(k,o);
            }
        }
    });


>>>>>>> 5f2fa9b0bf7225c327f3c008456bd5c0a0bc43d9
    return (
        <div className="theater">
            <div className="screen"></div>
            <Row>
                <Seat />
            </Row>

<<<<<<< HEAD
=======
            {}

            {/* <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
            </div>
            <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
            </div> */}
>>>>>>> 5f2fa9b0bf7225c327f3c008456bd5c0a0bc43d9
        </div>
    );
}

/* conditionals:
if booked === 0 seat classname; if booked === 1, seating is occupied.
if hoovered, then seat is selected. */


export default Theater;
