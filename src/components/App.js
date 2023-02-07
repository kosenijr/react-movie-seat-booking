import { useState, useEffect } from 'react';
import MovieSelection from './MovieSelection';
import SeatLegend from './SeatLegend';
import Theater from './Theater';
import TicketPricing from './TicketPricing';

const App = () => {
    const [theaters, setTheaters] = useState([]);
    const [theater, setTheater] = useState();

    useEffect(() => {
        fetch('/api/theater.json') // don't have to put localhost:3000, but leave forward slash
            .then((res) => res.json())
            .then((res) => setTheaters(res.data.theaters));
    }, []);

    console.log(theaters);

    return (
        <>
            <MovieSelection listItems={theaters} setTheater={setTheater}/>
            <SeatLegend />
            <Theater />
            <TicketPricing />
        </>
    );
};

export default App;
