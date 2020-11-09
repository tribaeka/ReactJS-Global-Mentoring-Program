import React, { useEffect, useMemo } from 'react';
import ActionBar from './action-bar/ActionBar';
import SearchInput from './search-input/SearchInput';
import styles from './Header.module.scss';
import { BarActions } from "./action-bar/BarActions";
import MovieDetails from "./movie-details/MovieDetails";
import { openPopup } from "@store/moviePopups/actions";
import { IMoviesItem } from "@components/search-results/movies-list/IMoviesItem";
import { updateSearch } from "@store/moviesList/actions";

export interface IHeaderProps {
    searchQuery?: string;
    storedSearch?: string;
    movie?: IMoviesItem;
    openPopup?: typeof openPopup;
}

const Header: React.FC<IHeaderProps> = (
    {
        searchQuery,
        storedSearch,
        movie,
        openPopup
    }) => {
    const activeAction = useMemo(() =>
        movie ? BarActions.BACK_TO_SEARCH : BarActions.ADD_MOVIE, [movie]);
    const headerContent = useMemo(() => {
        return movie
            ? <MovieDetails title={movie.title}
                            posterPath={movie.posterPath}
                            releaseDate={movie.releaseDate}
                            runtime={movie.runtime}
                            overview={movie.overview}
                            genres={movie.genres}
                            voteAverage={movie.voteAverage}/>
            : <SearchInput updateSearch={updateSearch} searchQuery={searchQuery}/>
        }, [movie]);
    const backgroundStyle = useMemo(() =>
        movie ? styles.pageHeaderBackgroundShadowed : styles.pageHeaderBackground, [movie]);

    useEffect(() => window.scrollTo(0, 0), [movie]);

    return (
        <div className={styles.pageHeaderWrapper}>
            <div className={backgroundStyle}/>
            <div className={styles.pageHeader}>
                <ActionBar search={storedSearch}
                           action={activeAction}
                           openPopup={openPopup}/>
                {headerContent}
            </div>
        </div>
    );
};

export default React.memo(Header);
