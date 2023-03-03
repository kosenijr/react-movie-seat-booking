import React, {useState} from 'react'

const log = console.log;

const MovieSelection = ({ listItems, setTheater}) => {

    const selectTheater = (e) => { // pass an event param
        // console.log('selectTheater is working'); // select another movie to see it work.
        // console.log(e.target, e.target.value);
        // console.log(listItems[0]);
        // setTheater({...listItems[e.target.value]}); //spread operator fixture; show P.
        setTheater({...listItems[e.target.value]}); //spread operator fixture; show P.
    }


    return (
        <div className="movie-selection">
            <label>Pick a movie:</label>

            <select id="movie" onChange={selectTheater}>
                {listItems.map((theater, index) => {
                    return (
                        <option key={index} value={index}>{theater.movie}</option>
                    )
                })
                }


            </select>
        </div>
    );
};

export default MovieSelection;

/*
Notes
- establish onChange on select tag and not each movie.
- onChange should pass the selectTheater function.
*/