import React, {useEffect} from 'react';
import ResultsCounter from './results-counter/ResultsCounter';
import MoviesList from './movies-list/MoviesList';
import { IMoviesItem } from './movies-list/IMoviesItem';
import {connect} from "react-redux";
import {getMoviesList} from "@store/moviesList/actions";
import {RootState} from "@store/index";
import {compose} from "redux";
import {getFilter, getMovies, getSearch, getSortBy, getTotalAmount} from "../../selectors";

interface ISearchResultsProps {
    movies: IMoviesItem[];
    sortBy: string;
    filter: string;
    search: string;
    totalAmount: number;
    getMoviesList?: typeof getMoviesList;
}

const SearchResults: React.FC<ISearchResultsProps> = (
    {
        movies,
        sortBy,
        filter,
        search,
        totalAmount,
        getMoviesList}) => {

    useEffect(() => {
        getMoviesList()
    }, [sortBy, filter, search]);

    return (
      <div className="search-results-container">
          <ResultsCounter moviesFound={totalAmount}/>
          <MoviesList movies={movies}/>
      </div>
    );
};

const mapStateToProps = (state: RootState): ISearchResultsProps => {
    return {
        movies: getMovies(state),
        sortBy: getSortBy(state),
        filter: getFilter(state),
        search: getSearch(state),
        totalAmount: getTotalAmount(state)
    }
};

const mapDispatchToProps = { getMoviesList };

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    React.memo
)(SearchResults);
