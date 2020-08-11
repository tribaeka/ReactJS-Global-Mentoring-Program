import React from 'react';
import MoviesNavigation from './movies-navigation/MoviesNavigation';
import SearchResults from './search-results/SearchResults';

const Main = () => {
    return (
      <div className="main-container">
        <MoviesNavigation/>
        <SearchResults/>
      </div>
    );
}

export default Main;
