const MovieSelection = ({ listItems }) => {
    console.log(listItems);



    return (
        <div className="movie-selection">
            <label>Pick a movie:</label>
            <select id="movie">
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
