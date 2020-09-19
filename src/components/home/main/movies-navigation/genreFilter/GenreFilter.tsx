import React from 'react';
import './genreFilter.scss';
import {FilterOptions} from "./FilterOptions";
import {MoviesListActionTypes} from "../../../../../store/moviesList/types";
import {connect} from "react-redux";
import {RootState} from "../../../../../store";
import {updateFilter} from "../../../../../store/moviesList/actions";
import {compose} from "redux";

interface IGenreFilterProps {
    activeFilterOption: string;
    updateFilter?(filter: string): MoviesListActionTypes;
}

const GenreFilter: React.FC<IGenreFilterProps> = ({ activeFilterOption, updateFilter }) => {
    const restoredActiveOption = activeFilterOption === '' ? 'ALL' : activeFilterOption.toUpperCase();
    return (
        <ul className="genre-list">
            {Object.keys(FilterOptions).map(option =>
                <li key={option}
                    onClick={() => updateFilter(option.toLowerCase())}
                    className={restoredActiveOption === option
                        ? 'active-genre-list-item'
                        : 'genre-list-item'}>
                    {option}
                </li>
            )}
        </ul>
    )
};

const mapStateToProps = (state: RootState): IGenreFilterProps => {
    return {
        activeFilterOption: state.movies.filter
    }
}

export default compose(
    connect(mapStateToProps, {updateFilter}),
    React.memo
)(GenreFilter);
