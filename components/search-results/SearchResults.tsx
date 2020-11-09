import React, { useEffect } from 'react';
import ResultsCounter from './results-counter/ResultsCounter';
import MoviesList from './movies-list/MoviesList';
import { IMoviesItem } from './movies-list/IMoviesItem';
import { openPopup } from "@store/moviePopups/actions";
import { getMoviesList, updateSearch } from "@store/moviesList/actions";
import { useRouter } from "next/router";
import { ISearchPageRouter } from "../../pages/search/[searchQuery]";

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
    const router: ISearchPageRouter = useRouter();
    useEffect(() => {
        updateSearch(router.query.searchQuery);
        getMoviesList(router.query.searchQuery)
    }, [sortBy, filter]);
    // todo think about replace div on <>
    return (
      <div>
          <ResultsCounter moviesFound={totalAmount}/>
          <MoviesList movies={movies} openPopup={openPopup}/>
      </div>
    );
};

export default React.memo(SearchResults);
