import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async (movieText) => {
        const APIkey = process.env.REACT_APP_API_KEY;
        const response = await MovieApi.get(`?apiKey=${APIkey}&s=${movieText}&type=movie`);
        return response.data;
    }
)

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows',
    async (showsText) => {
        const APIkey = process.env.REACT_APP_API_KEY;
        const response = await MovieApi.get(`?apiKey=${APIkey}&s=${showsText}&type=series`);
        return response.data;
    }
)

export const fetchAsyncItemById = createAsyncThunk(
    'movies/fetchAsyncItemById',
    async (id) => {
        const APIkey = process.env.REACT_APP_API_KEY;
        const response = await MovieApi.get(`?apiKey=${APIkey}&i=${id}&Plot=full`);
        return response.data;
    }
)

const initialState = {
    movies: {},
    shows: {},
    selectedItem: {},
    loading: false
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload
        },
        removeSelectedItem: (state) => {
            state.selectedItem = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
                console.log("Fetched Successfully!");
                return { ...state, movies: payload };
            })
            .addCase(fetchAsyncMovies.pending, (state)=>{
                state.loading = true;
            })
            .addCase(fetchAsyncMovies.rejected, ()=>{
                console.log('rejected');
            })
            .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
                console.log("Fetched Successfully!");
                return { ...state, loading: false, shows: payload };
            })
            .addCase(fetchAsyncItemById.fulfilled, (state, { payload }) => {
                console.log("Fetched Successfully!");
                return { ...state, loading: false, selectedItem: payload };
            })
    }
})

export const { addMovies, removeSelectedItem } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedItem = (state) => state.movies.selectedItem;
export const getLoading = (state) => state.movies.loading;
export default moviesSlice.reducer;
