import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncItemById, getSelectedItem, removeSelectedItem } from '../../features/movies/moviesSlice';
import './MovieDetails.scss'
import '../../common/hour-glass-loader.scss'
import poster from '../../images/poster.jpg'
const MovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const item = useSelector(getSelectedItem);

    useEffect(() => {
        dispatch(fetchAsyncItemById(id));
        return () => { dispatch(removeSelectedItem()) }
    }, [dispatch, id]);

    return (
        <div className="movie-section">
            {Object.keys(item).length === 0 ? (
                 <div className="lds-hourglass"> </div>
            ) : (
                <>
                    <div className="section-left">
                        <div className="movie-title">{item.Title}</div>
                        <div className="movie-rating">
                            <span>
                                IMDB Rating <i className="fa fa-star"></i> : {item.imdbRating}
                            </span>
                            <span>
                                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                                {item.imdbVotes}
                            </span>
                            <span>
                                Runtime <i className="fa fa-film"></i> : {item.Runtime}
                            </span>
                            <span>
                                Year <i className="fa fa-calendar"></i> : {item.Year}
                            </span>
                        </div>
                        <div className="movie-plot">{item.Plot}</div>
                        <div className="movie-info">
                            <div>
                                <span>Director</span>
                                <span>{item.Director}</span>
                            </div>
                            <div>
                                <span>Stars</span>
                                <span>{item.Actors}</span>
                            </div>
                            <div>
                                <span>Generes</span>
                                <span>{item.Genre}</span>
                            </div>
                            <div>
                                <span>Languages</span>
                                <span>{item.Language}</span>
                            </div>
                            <div>
                                <span>Awards</span>
                                <span>{item.Awards}</span>
                            </div>
                        </div>
                    </div>
                    <div className="section-right">
                        <img src={item.Poster !== 'N/A'? item.Poster : poster } alt={item.Title} />
                    </div>
                </>
            )}
        </div>
    );
};

export default MovieDetails;