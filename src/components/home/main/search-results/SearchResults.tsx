import React, {useEffect} from 'react';
import ResultsCounter from './results-counter/ResultsCounter';
import MoviesList from './movies-list/MoviesList';
import { IMoviesItem } from './movies-list/IMoviesItem';
import {connect} from "react-redux";
import {getMoviesList} from "../../../../store/moviesList/actions";
import {RootState} from "../../../../store";
import {compose} from "redux";

interface ISearchResultsProps {
    movies: IMoviesItem[];
    sortBy: string;
    filter: string;
    search: string;
    totalAmount: number;
    getMoviesList?(): void;
}

const SearchResults: React.FC<ISearchResultsProps> = ({
                                                          movies,
                                                          sortBy,
                                                          filter,
                                                          search,
                                                          totalAmount,
                                                          getMoviesList
}) => {
    useEffect(() => {
        getMoviesList()
    }, [sortBy, filter, search]);
    // useEffect(() => console.log('component render'.toUpperCase())); // has one extra render?

    return (
      <div className="search-results-container">
          <ResultsCounter moviesFound={totalAmount}/>
          <MoviesList movies={movies}/>
      </div>
    );
};

const mapStateToProps = (state: RootState): ISearchResultsProps => {
    return {
        movies: state.movies.movies,
        sortBy: state.movies.sortBy,
        filter: state.movies.filter,
        search: state.movies.search,
        totalAmount: state.movies.totalAmount
    }
}

export default compose(
    connect(mapStateToProps, {getMoviesList}),
    React.memo
)(SearchResults);
