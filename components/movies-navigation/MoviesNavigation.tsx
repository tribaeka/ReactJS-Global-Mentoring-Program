import React from 'react';
import GenreFilter from './genre-filter/GenreFilter';
import SortSwitcher from './sort-switcher/SortSwitcher';
import styles from './moviesNavigation.module.scss';
import {updateFilter, updateSortBy} from "@store/moviesList/actions";

export interface IMovieNavigationProps {
    activeFilterOption: string;
    activeSortByOption: string;
    updateSortBy?: typeof updateSortBy;
    updateFilter?: typeof updateFilter;
}

const MoviesNavigation: React.FC<IMovieNavigationProps> = (
    {
        activeFilterOption,
        activeSortByOption,
        updateFilter,
        updateSortBy
    }
) => {
    console.log(activeFilterOption);
    return (
        <div className={styles.moviesNavigationContainer}>
            <GenreFilter activeFilterOption={activeFilterOption} updateFilter={updateFilter}/>
            <SortSwitcher activeSortByOption={activeSortByOption} updateSortBy={updateSortBy}/>
        </div>
    )
};

export default React.memo(MoviesNavigation);
