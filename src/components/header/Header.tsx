import React, {useEffect, useMemo} from 'react';
import ActionBar from './action-bar/ActionBar';
import SearchInput from './search-input/SearchInput';
import './header.scss';
import {BarActions} from "./action-bar/BarActions";
import MovieDetails from "./movie-details/MovieDetails";
import {DEFAULT_BACKGROUND_STYLE_NAME, SHADOWED_BACKGROUND_STYLE_NAME} from "./constants";
import {openPopup} from "@store/moviePopups/actions";
import {IMoviesItem} from "@components/search-results/movies-list/IMoviesItem";
import {updateSearch} from "../../store/moviesList/actions";

export interface IHeaderProps {
    search?: string;
    movie?: IMoviesItem;
    openPopup?: typeof openPopup;
}

const Header: React.FC<IHeaderProps> = ({ search, movie, openPopup }) => {
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
            : <SearchInput updateSearch={updateSearch}/>
        }, [movie]);
    const backgroundStyle = useMemo(() =>
        movie ? SHADOWED_BACKGROUND_STYLE_NAME : DEFAULT_BACKGROUND_STYLE_NAME, [movie]);

    useEffect(() => window.scrollTo(0, 0), [movie]);

    return (
        <div className="page-header-wrapper">
            <div className={backgroundStyle}/>
            <div className="page-header">
                <ActionBar search={search}
                           action={activeAction}
                           openPopup={openPopup}/>
                {headerContent}
            </div>
        </div>
    );
};

export default React.memo(Header);
