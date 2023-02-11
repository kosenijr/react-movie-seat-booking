const MovieSelection = ({ listItems, setTheater }) => {
    const selectTheater = (e) => {
        // console.log(e.target.value, e.target);
        setTheater({ ...listItems[e.target.value] });
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
