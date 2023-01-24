import { useState, useEffect } from 'react';
import MovieSelection from './MovieSelection';
import SeatLegend from './SeatLegend';
import Theater from './Theater';
import TicketPricing from './TicketPricing';

const App = () => {
    const [theaters, setTheaters] = useState([]);
    const [theater, setTheater] = useState({});

    useEffect(() => {
        fetch('http://localhost:3000/api/theater.json')
            .then((res) => res.json())
            .then((res) => setTheaters(res.data.theaters));
    }, []);
    // console.log(theaters);

    return (
        <>
            <MovieSelection listItems={theaters} />
            <SeatLegend />
            <Theater />
            <TicketPricing />
        </>
    );
};

export default App;
