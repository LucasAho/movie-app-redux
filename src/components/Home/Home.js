import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';

import MovieListing from '../MovieListing/MovieListing';

import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
    const dispatch = useDispatch();
    const movieText = 'Harry';
    const showText = 'Avatar'
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showText));
    }, [dispatch]);
    return (
        <div>
            <div className='banner-img'>
                <MovieListing />
            </div>
        </div>
    );
};

export default Home;