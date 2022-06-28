import { useEffect } from 'react';
import './app.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

const App = () => {
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        console.log(data.Search);
    }

    const movie_key = process.env.REACT_APP_MOVIE_KEY;
    const API_URL = `http://www.omdbapi.com?apikey=${movie_key}`;
    const movie1 = {
        "Title": "The Waterboy",
        "Year": "1998",
        "imdbID": "tt0120484",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzJmZDZlMGItZGJhOC00Y2NjLTljNzctMDg5YmQ1NzU3NzYzL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    }

    useEffect(() => {
        searchMovies('Waterboy')
    }, [])

   
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                placeholder='Search for movies'
                value='Superman'
                onChange={() => {}}
                type="text" 
                />
                <img src={SearchIcon} 
                alt="search"
                onClick={() => {}} 
                />
                <div className="container">
                    <MovieCard movie={movie1} />
                </div>
            </div>
        </div>
    )
}

export default App;