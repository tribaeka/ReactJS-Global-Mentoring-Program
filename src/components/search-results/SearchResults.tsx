import React, {useEffect} from 'react';
import ResultsCounter from './results-counter/ResultsCounter';
import MoviesList from './movies-list/MoviesList';
import { IMoviesItem } from './movies-list/IMoviesItem';
import {openPopup} from "@store/moviePopups/actions";
import { getMoviesList, updateSearch } from "@store/moviesList/actions";
import {useParams} from "react-router";

export interface ISearchResultsProps {
    movies: IMoviesItem[];
    sortBy: string;
    filter: string;
    totalAmount: number;
    getMoviesList?: typeof getMoviesList;
    openPopup?: typeof openPopup;
    updateSearch?: typeof updateSearch;
}

const SearchResults: React.FC<ISearchResultsProps> = (
    {
        movies,
        sortBy,
        filter,
        totalAmount,
        getMoviesList,
        openPopup,
        updateSearch
    }) => {
    const { search } = useParams();
    useEffect(() => {
        updateSearch(search);
        getMoviesList(search)
    }, [sortBy, filter]);

    return (
      <div className="search-results-container">
          <ResultsCounter moviesFound={totalAmount}/>
          <MoviesList movies={movies} openPopup={openPopup}/>
      </div>
    );
};

export default React.memo(SearchResults);
