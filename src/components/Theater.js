import Row from './Row';
import Seat from './Seat';

const Theater = ({ listItems, theater }) => {
    const log = console.log;
    // listItems finding rows
    listItems.map((theater, index) => {
        theater.seats.map((row, rowIndex) => {
            row.map((columns, columnsIndex) => {
                log(row, rowIndex, columns, columnsIndex)
            })
        })
    })



    return (
        <div className="theater">
            <div className="screen"></div>

        </div >
    )
};


export default Theater;



/*

NOTES

- issue with rendering as soon as page loads.

- issue logging 'The Lion King' as the first movie before selecting another movie.

 

*/