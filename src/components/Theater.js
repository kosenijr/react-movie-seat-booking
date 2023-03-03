import Row from './Row';
import Seat from './Seat';

const Theater = ({ listItems, theater }) => {
    const log = console.log;
    // log(listItems);
    // log(theater);

    listItems.map((area, areaIndex) => {
        // log(area.movie === theater[areaIndex], area.movie);
    })





    // log(theater, ...theaters);

    // external for-loop that encompasses return statement
    // listItems.map((area, areaIndex) => {
    //     log(Array.isArray(theater), Array.isArray(listItems))
    //     log(listItems[areaIndex], theater[areaIndex], listItems[areaIndex] === theater[areaIndex])
    //     // navigate to seats
    //     return area.seats.map((row, rowIndex) => {
    //         // log(row, rowIndex);
    //         <div className="row" key={rowIndex} value={row}></div>
    //             {row.map((seat, seatIndex) => {
    //                 // log(seat);
    //                 <Seat key={seatIndex} value={seat} />;
    //             })}
    //     });
    // });
};

export default Theater;

/*
NOTES
- issue with rendering as soon as page loads.
- issue logging 'The Lion King' as the first movie before selecting another movie.

*/
