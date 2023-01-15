import React from 'react';
import './MovieCard.scss'
import { Link } from 'react-router-dom';
import poster from '../../images/poster.jpg'
const MovieCard = ({ data }) => {
    console.log(data.Title, data.Poster);
    return (
        <div className='card-item'>
            <Link to={`/movie/${data.imdbID}`}>
                <div className="card-inner">
                    <div className="card-top">
                        <img src={data.Poster !== 'N/A'? data.Poster : poster } alt={data.Title} />
                    </div>
                    <div className="card-bottom">
                        <div className="card-info">
                            <h4> {data.Title} </h4>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;