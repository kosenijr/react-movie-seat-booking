<<<<<<< HEAD
const MovieSelection = ({ listItems, setTheater }) => {
    const selectTheater = (e) => {
        console.log(e.target.value, e.target);
        setTheater(listItems[e.target.value]);
=======
const MovieSelection = ({ listItems }) => {
    // console.log(listItems);

>>>>>>> 5f2fa9b0bf7225c327f3c008456bd5c0a0bc43d9

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
