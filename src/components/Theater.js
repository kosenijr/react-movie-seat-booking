import Row from './Row';
import Seat from './Seat';

const Theater = ({ listItems, theater }) => {
    const log = console.log;
    
    // log(theater, ...theaters);

    // multilayered for loop for navigation

    return (
        <div className="theater">
            <div className="screen"> </div>

            {listItems?.map((row, index) => {
                log(row, index);
            })}
            <Row>
                <Seat> </Seat>
            </Row>
        </div>
    );
};

export default Theater;
