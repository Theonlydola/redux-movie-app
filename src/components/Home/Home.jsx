import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows, getLoading } from '../../features/movies/moviesSlice'
import '../../common/hour-glass-loader.scss'
import './Home.scss'
const Home = () => {
    const dispatch = useDispatch();
    const loading = useSelector(getLoading);
    useEffect(() => {
        dispatch(fetchAsyncMovies('harry'));
        dispatch(fetchAsyncShows('friends'));

    }, [dispatch])

    return (
        <>
            {loading ?
                <div className="wrapper">
                    <div className="lds-hourglass"> </div>
                </div>
                :
                <MovieListing />
            }


        </>
    );
};

export default Home;