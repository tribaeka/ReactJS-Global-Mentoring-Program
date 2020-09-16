import React from "react";
import './movieDetails.scss';
import {IMoviesItem} from "../../main/search-results/movies-list/IMoviesItem";
import Utils from "@components/utils";


interface MovieDetailsProps {
    movie: IMoviesItem;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
    return (
        <div className="movie-detail-container">
            <img className="movies-image" src={movie.posterPath} alt=""/>
            <div className="movie-detail-description">
                <p>
                    <span className="movie-title">{movie.title}</span>
                    <span className="movie-rating">{movie.voteAverage}</span>
                </p>
                <span className="movie-sub-title">{Utils.genresToString(movie.genres)}</span>
                <p>
                    <span className="movie-year">{Utils.getReleaseYear(movie.releaseDate)}</span>
                    <span className="movie-runtime">{movie.runtime} min</span>
                </p>
                <p className="movie-overview">{movie.overview}</p>
            </div>
        </div>
    );
};

export default MovieDetails;