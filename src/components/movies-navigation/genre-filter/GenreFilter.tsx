import React, {useCallback, useMemo} from 'react';
import './genreFilter.scss';
import {FilterOptions} from "./FilterOptions";
import {connect} from "react-redux";
import {RootState} from "@store/index";
import {updateFilter} from "@store/moviesList/actions";
import {compose} from "redux";
import {getFilter} from "../../../selectors";

interface IGenreFilterProps {
    activeFilterOption: string;
    updateFilter?: typeof updateFilter;
}

const GenreFilter: React.FC<IGenreFilterProps> = ({ activeFilterOption, updateFilter }) => {
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

const mapStateToProps = (state: RootState): IGenreFilterProps => {
    return {
        activeFilterOption: getFilter(state)
    }
};

const mapDispatchToProps = { updateFilter };

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    React.memo
)(GenreFilter);
