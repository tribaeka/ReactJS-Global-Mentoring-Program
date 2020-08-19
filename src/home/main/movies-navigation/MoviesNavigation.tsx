import React from 'react';
import GenreFilter from './genreFilter/GenreFilter';
import SortSwitcher from './sort-switcher/SortSwitcher';

const MoviesNavigation: React.FC = () => {
    return (
        <div className="movies-navigation-container">
            <GenreFilter/>
            <SortSwitcher/>
        </div>
    )
};

export default MoviesNavigation;
