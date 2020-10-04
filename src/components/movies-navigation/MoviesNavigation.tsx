import React from 'react';
import GenreFilter from './genreFilter/GenreFilter';
import SortSwitcher from './sort-switcher/SortSwitcher';
import './moviesNavigation.scss';

const MoviesNavigation: React.FC = () => {
    return (
        <div className="movies-navigation-container">
            <GenreFilter/>
            <SortSwitcher/>
        </div>
    )
};

export default MoviesNavigation;
