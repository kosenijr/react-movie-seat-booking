import { useState, useEffect } from 'react';
import MovieSelection from './MovieSelection';
import SeatLegend from './SeatLegend';
import Theater from './Theater';
import TicketPricing from './TicketPricing';

const log = console.log;

const App = () => {
    const [theaters, setTheaters] = useState([]);
    const [theater, setTheater] = useState({});
    // for theaters
    useEffect(() => {
        fetch('/api/theater.json') // don't have to put localhost:3000, but leave forward slash
            .then((res) => res.json())
            .then((res) => setTheaters(res.data.theaters));
    }, []);
    // for theater
    useEffect(() => {
        fetch('/api/theater.json')
            .then((res) => res.json())
            .then((res) => setTheater(res.data.theaters[0]));
    }, []);
    // console.log(theaters);
    // console.log(theater);

    // console.log(theaters);
    // log(theater);

    // log(theater);
    return (
        <>
            <MovieSelection listItems={theaters} setTheater={setTheater} />
            <SeatLegend />
            <Theater listItems={theaters} theater={theater} />
            <TicketPricing />
        </>
    );
};

export default App;
