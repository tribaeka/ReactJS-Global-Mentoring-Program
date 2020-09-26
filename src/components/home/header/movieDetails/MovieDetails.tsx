import React, {useCallback, useState} from "react";
import './movieDetails.scss';
import Utils from "@components/utils";
import defaultMovieImage from '@assets/default-movie.png'

interface MovieDetailsProps {
    title: string;
    posterPath: string;
    releaseDate: string;
    runtime: number;
    overview: string;
    genres: string[];
    voteAverage: number;
}

const MovieDetails: React.FC<MovieDetailsProps> = (
    {
        title,
        posterPath,
        releaseDate,
        runtime,
        overview,
        genres,
        voteAverage
    }) => {
    const [imageSource, setImageSource] = useState(posterPath ? posterPath : defaultMovieImage);
    const imageLoadErrorHandler = useCallback(() => setImageSource(defaultMovieImage), []);

    return (
        <div className="movie-detail-container">
            <img className="movies-image" src={imageSource} onError={imageLoadErrorHandler} alt=""/>
            <div className="movie-detail-description">
                <p>
                    <span className="movie-title">{title}</span>
                    <span className="movie-rating">{voteAverage}</span>
                </p>
                <span className="movie-sub-title">{Utils.genresToString(genres)}</span>
                <p>
                    <span className="movie-year">{Utils.getReleaseYear(releaseDate)}</span>
                    <span className="movie-runtime">{runtime} min</span>
                </p>
                <p className="movie-overview">{overview}</p>
            </div>
        </div>
    );
};

export default MovieDetails;