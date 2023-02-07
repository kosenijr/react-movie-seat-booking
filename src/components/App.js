import { useState, useEffect } from 'react';
import MovieSelection from './MovieSelection';
import SeatLegend from './SeatLegend';
import Theater from './Theater';
import TicketPricing from './TicketPricing';

const App = () => {
    const log = console.log;
    const [theaters, setTheaters] = useState([]);
    const [theater, setTheater] = useState({});

    useEffect(() => {
        fetch('/api/theater.json')
            .then((res) => res.json())
            .then((res) => setTheaters(res.data.theaters));

    }, []);

    log(theater);

    return (
        <>
            <MovieSelection listItems={theaters} setTheater={setTheater} />
            <SeatLegend />
<<<<<<< HEAD
            <Theater theater={theater} />
=======
            <Theater listItems={theaters}/>
>>>>>>> 5f2fa9b0bf7225c327f3c008456bd5c0a0bc43d9
            <TicketPricing />
        </>
    );
}

export default App;