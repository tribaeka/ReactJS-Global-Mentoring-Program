import React from 'react';
import ResultsCounter from './results-counter/ResultsCounter';
import MoviesList from './movies-list/MoviesList';

const SearchResults = () => {
    return (
      <div className="search-results-container">
          <ResultsCounter/>
          <MoviesList/>
      </div>
    );
}

export default SearchResults;
