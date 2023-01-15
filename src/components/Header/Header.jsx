import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/moviesSlice';
import user from '../../images/user.png'
import './Header.scss'

const Header = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchAsyncMovies(searchText));
        dispatch(fetchAsyncShows(searchText));
        setSearchText('');
    }
    return (
        <div className='header'>
            <div className="logo"> <Link to='/'>Movie App</Link></div>
            <div className="search-bar">
                <form onSubmit={onSubmit}>
                    <input type="text"
                        value={searchText}
                        placeholder='ex: Harry potter'
                        onChange={(e) => setSearchText(e.target.value)} />
                    <button type='submit' disabled={searchText.length < 5}>
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div className="user-image">
                <img src={user} alt="user" />
            </div>
        </div>
    );
};

export default Header;