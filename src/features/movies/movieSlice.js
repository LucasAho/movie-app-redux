import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import movieAPI from '../../common/API/movieAPI';
import { APIKey } from '../../common/API/movieAPIKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async () => {
        const hardMovie = 'Despicable Me';
        const res = await movieAPI.get(`?apiKey=${APIKey}&s=${hardMovie}&type=movie`);
        return res.data;
    }
);

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',
    async () => {
        const hardShow = 'Avatar';
        const res = await movieAPI.get(`?apiKey=${APIKey}&s=${hardShow}&type=series`);
        return res.data;
    }
);

export const fetchAsyncDetails = createAsyncThunk('movies/fetchAsyncDetails',
    async (id) => {
        const res = await movieAPI.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
        return res.data;
    }
);

const initialState = {
    movies: {},
    shows: {},
    details: {}
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedDetails: (state) => {
            state.details = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('Pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('Fetched Successfully');
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log('Rejected');
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log('Fetched Successfully');
            return { ...state, shows: payload }
        },
        [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
            console.log('Fetched Successfully');
            return { ...state, details: payload }
        },
    }
});

export const { removeSelectedDetails } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getDetails = (state) => state.movies.details;
export default movieSlice.reducer;