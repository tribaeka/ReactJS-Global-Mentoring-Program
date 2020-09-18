import React, {useEffect} from 'react';
import ResultsCounter from './results-counter/ResultsCounter';
import MoviesList from './movies-list/MoviesList';
import { IMoviesItem } from './movies-list/IMoviesItem';
import './searchResults.scss';
import {connect} from "react-redux";
import {getMoviesList} from "../../../../store/moviesList/actions";
import {RootState} from "../../../../store";

interface ISearchResultsProps {
    movies: IMoviesItem[];
    sortBy: string;
    filter: string;
    totalAmount: number;
    getMoviesList?(): void;
}

const SearchResults: React.FC<ISearchResultsProps> = ({
                                                          movies,
                                                          sortBy,
                                                          filter,
                                                          totalAmount,
                                                          getMoviesList
}) => {
    useEffect(() => {
        getMoviesList()
    }, [sortBy, filter]);
    console.log(movies);
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
        totalAmount: state.movies.totalAmount
    }
}

export default connect(mapStateToProps, {getMoviesList})(SearchResults);
