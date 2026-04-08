import Moviecard from './movieCard';

const MovieList = ({ movies }) => {

    if (movies.length === 0) {
        return <p>Movies not found.</p>
    }

    return (
        <div>

            <div className="movie-list">
                {
                    movies.map((movie) => (
                        <Moviecard key={movie.imdbID} movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList;