import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import MovieCard from '../MovieCard/MovieCard.js';
import './MovieListing.scss';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    let renderMovies, renderShows = '';

    renderShows =
        shows.Response === 'True' ? (

            shows.Search.map((show, i) => (
                <MovieCard key={i} data={show} />
            ))
        ) : (
            <div className='shows-error'>
                <h3>{shows.Error}</h3 >
            </div >
        );
    renderMovies =
        movies.Response === 'True' ? (
            movies.Search.map((movie, i) => (
                <MovieCard key={i} data={movie} />
            ))
        ) : (
            <div className='movies-error'>
                <h3>{movies.Error}</h3 >
            </div >
        );
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    {renderMovies}
                </div>
            </div>
            <div className='show-list'>
                <h2>Shows</h2>
                <div className='movie-container'>
                    {renderShows}
                </div>
            </div>
        </div>
    );
};

export default MovieListing;