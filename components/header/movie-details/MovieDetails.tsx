import React, {useCallback, useEffect, useState} from "react";
import styles from './movieDetails.module.scss';
import defaultMovieImage from '@assets/default-movie.png'
import Utils from "@components/Utils";

interface MovieDetailsProps {
    title: string;
    posterPath: string;
    releaseDate: string;
    runtime: number;
    overview: string;
    genres: string;
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
    const getValidPosterPath = () => posterPath ? posterPath : defaultMovieImage;
    const [imageSource, setImageSource] = useState(getValidPosterPath());
    const imageLoadErrorHandler = useCallback(() => setImageSource(defaultMovieImage), []);
    useEffect(() => setImageSource(getValidPosterPath()), [posterPath]);

    return (
        <div className={styles.movieDetailContainer}>
            <img className={styles.moviesImage} src={imageSource} onError={imageLoadErrorHandler} alt=""/>
            <div className={styles.movieDetailDescription}>
                <p>
                    <span className={styles.movieSubTitle}>{title}</span>
                    <span className={styles.movieRating}>{voteAverage}</span>
                </p>
                <span className={styles.movieSubTitle}>{genres}</span>
                <p>
                    <span className={styles.movieYear}>{Utils.getReleaseYear(releaseDate)}</span>
                    <span className={styles.movieRuntime}>{runtime} min</span>
                </p>
                <p className={styles.movieOverview}>{overview}</p>
            </div>
        </div>
    );
};

export default React.memo(MovieDetails);
