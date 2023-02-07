import Row from './Row';
import Seat from './Seat';

const Theater = ({ listItems }) => {
    const log = console.log;

    // multilayered for loop for navigation

    return (
        <div className="theater">
            <div className="screen"></div>
            <Row>
                <Seat> </Seat>
            </Row>
        </div>
    );
};

export default Theater;
