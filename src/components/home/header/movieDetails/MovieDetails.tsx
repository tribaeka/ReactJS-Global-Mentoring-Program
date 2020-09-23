import React from "react";
import './movieDetails.scss';
import defaultMovieImage from '@assets/default-movie.png'


interface MovieDetailsProps {
    title: string;
    subTitle: string;
    year: number;
    runtime: number;
    overview: string;
}

const MovieDetails: React.FC<MovieDetailsProps> =
    ({
         title,
         subTitle,
         year,
         runtime,
         overview
    }) => {
    return (
        <div className="movie-detail-container">
            <img className="movies-image" src={defaultMovieImage} alt=""/>
            <div className="movie-detail-description">
                <p>
                    <span className="movie-title">{title}</span>
                    <span className="movie-rating">4.7</span>
                </p>
                <span className="movie-sub-title">{subTitle}</span>
                <p>
                    <span className="movie-year">{year}</span>
                    <span className="movie-runtime">{runtime} min</span>
                </p>
                <p className="movie-overview">{overview}</p>
            </div>
        </div>
    );
};

export default MovieDetails;