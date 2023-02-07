import Row from './Row'
import Seat from './Seat'

const log = console.log;


const Theater = () => {
    return (
        <div className="theater">
            <div className="screen"></div>
            <Row>
                <Seat />
            </Row>

        </div>
    );
}

/* conditionals:
if booked === 0 seat classname; if booked === 1, seating is occupied.
if hoovered, then seat is selected. */


export default Theater;
