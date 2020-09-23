import React from "react";
import './movieDetails.scss';
import {IMoviesItem} from "../../main/search-results/movies-list/IMoviesItem";
import defaultMovieImage from '@assets/default-movie.png'


interface MovieDetailsProps {
    movie: IMoviesItem;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
    console.log(movie);
    return (
        <div className="movie-detail-container">
            <img className="movies-image" src={defaultMovieImage} alt=""/>
            <div className="movie-detail-description">
                <p>
                    <span className="movie-title">{movie.title}</span>
                    <span className="movie-rating">4.7</span>
                </p>
                <span className="movie-sub-title">{movie.subTitle}</span>
                <p>
                    <span className="movie-year">{movie.year}</span>
                    <span className="movie-runtime">{movie.runtime} min</span>
                </p>
                <p className="movie-overview">{movie.overview}</p>
            </div>
        </div>
    );
};

export default MovieDetails;