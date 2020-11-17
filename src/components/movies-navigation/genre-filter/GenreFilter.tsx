import React, {useCallback, useMemo} from 'react';
import './genreFilter.scss';
import {FilterOptions} from "./FilterOptions";
import {updateFilter} from "@store/moviesList/actions";

interface IGenreFilterProps {
    activeFilterOption: string;
    updateFilter: typeof updateFilter;
}

const GenreFilter: React.FC<IGenreFilterProps> = ({ activeFilterOption, updateFilter }) => {
    console.log(activeFilterOption);
    const restoredActiveOption = activeFilterOption === '' ? 'ALL' : activeFilterOption.toUpperCase();
    const genreClickHandler = useCallback((option: string) => updateFilter(option.toLowerCase()), []);
    const genres = useMemo(() => {
        return Object.keys(FilterOptions).map(option =>
            <li key={option}
                onClick={() => genreClickHandler(option)}
                className={restoredActiveOption === option
                    ? 'active-genre-list-item'
                    : 'genre-list-item'}>
                {option}
            </li>
        )
    }, []);

    return (
        <ul className="genre-list">
            {genres}
        </ul>
    )
};

export default React.memo(GenreFilter);
