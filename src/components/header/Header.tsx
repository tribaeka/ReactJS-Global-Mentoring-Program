import React, {useEffect, useMemo} from 'react';
import ActionBar from './action-bar/ActionBar';
import SearchInput from './search-input/SearchInput';
import './header.scss';
import {BarActions} from "./action-bar/BarActions";
import MovieDetails from "./movie-details/MovieDetails";
import {DEFAULT_BACKGROUND_STYLE_NAME, SHADOWED_BACKGROUND_STYLE_NAME} from "./constants";
import {RootState} from "@store/index";
import {compose} from "redux";
import {connect} from "react-redux";
import {updateMovieDetails} from "@store/movieDetails/actions";
import {IMoviesItem} from "@components/search-results/movies-list/IMoviesItem";
import {getMovie} from "../../selectors";

interface IHeaderProps {
    movie: IMoviesItem;
}

const Header: React.FC<IHeaderProps> = ({ movie }) => {
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
            : <SearchInput/>
        }, [movie]);
    const backgroundStyle = useMemo(() =>
        movie ? SHADOWED_BACKGROUND_STYLE_NAME : DEFAULT_BACKGROUND_STYLE_NAME, [movie]);

    useEffect(() => window.scrollTo(0, 0), [movie]);

    return (
        <div className="page-header-wrapper">
            <div className={backgroundStyle}/>
            <div className="page-header">
                <ActionBar action={activeAction}/>
                {headerContent}
            </div>
        </div>
    );
};

const mapStateToProps = (state: RootState): IHeaderProps => {
    return {
        movie: getMovie(state)
    }
};

const mapDispatchToProps = { updateMovieDetails };

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    React.memo
)(Header);
