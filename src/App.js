import { useEffect, useState } from 'react';
import './app.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    const movie_key = process.env.REACT_APP_MOVIE_KEY;
    const API_URL = `http://www.omdbapi.com?apikey=${movie_key}`;

    useEffect(() => {
        searchMovies('Waterboy')
    }, [])

   
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                placeholder='Search for movies'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text" 
                />
                <img src={SearchIcon} 
                alt="search"
                onClick={() => searchMovies(searchTerm)} 
                />
            </div>
                {
                movies?.length > 0 
                ? (
                    <div className="container">
                        {movies.map((movie) => 
                        <MovieCard movie={movie} />
                        )}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
                }
            </div>
    )
}

export default App;