import React, {useCallback, useMemo} from 'react';
import styles from './genreFilter.module.scss';
import {FilterOptions} from "./FilterOptions";
import {updateFilter} from "@store/moviesList/actions";

interface IGenreFilterProps {
    activeFilterOption: string;
    updateFilter: typeof updateFilter;
}

const GenreFilter: React.FC<IGenreFilterProps> = ({ activeFilterOption, updateFilter }) => {
    const restoredActiveOption = activeFilterOption === '' ? 'ALL' : activeFilterOption.toUpperCase();
    const genreClickHandler = useCallback((option: string) => updateFilter(option.toLowerCase()), []);
    const genres = useMemo(() => {
        return Object.keys(FilterOptions).map(option =>
            <li key={option}
                onClick={() => genreClickHandler(option)}
                className={restoredActiveOption === option
                    ? styles.activeGenreListItem
                    : styles.genreListItem}>
                {option}
            </li>
        )
    }, []);

    return (
        <ul className={styles.genreList}>
            {genres}
        </ul>
    )
};

export default React.memo(GenreFilter);
