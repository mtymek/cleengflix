import { useState, useEffect } from 'react';

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetch movie data from the JSON file
        fetch('/movies-250.json')
            .then((response) => response.json())
            .then((data) => setMovies(data.movies))
            .catch((error) => console.error('Error fetching movie data:', error));
    }, []);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {movies.map((movie, index) => (
                <div key={index} className="group relative">
                    <img src={movie.Poster} alt={movie.Title} className="rounded-lg shadow-md" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition duration-300 flex items-center justify-center">
                        <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-500">
                            Play
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MovieList;