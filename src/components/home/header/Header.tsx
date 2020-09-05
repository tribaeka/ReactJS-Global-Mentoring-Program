import React, {useEffect, useMemo} from 'react';
import ActionBar from './action-bar/ActionBar';
import SearchInput from './search-input/SearchInput';
import './header.scss';
import {useMovieDetails} from "../../contexts";
import {BarActions} from "./action-bar/BarActions";
import MovieDetails from "./movieDetails/MovieDetails";
import {DEFAULT_BACKGROUND_STYLE_NAME, SHADOWED_BACKGROUND_STYLE_NAME} from "./constants";

const Header: React.FC = () => {
    const movie = useMovieDetails().movie;
    const activeAction = useMemo(() =>
        movie ? BarActions.BACK_TO_SEARCH : BarActions.ADD_MOVIE, [movie]);
    const headerContent = useMemo(() =>
        movie ? <MovieDetails movie={movie}/> : <SearchInput/>, [movie]);
    const backgroundStyle = useMemo(() =>
        movie ? SHADOWED_BACKGROUND_STYLE_NAME : DEFAULT_BACKGROUND_STYLE_NAME, [movie]);

    useEffect(() => window.scrollTo(0, 0), [movie]);

    return (
        <>
            <div className={backgroundStyle}/>
            <div className="home-header">
                <ActionBar action={activeAction}/>
                {headerContent}
            </div>
        </>
    );
}

export default Header;
