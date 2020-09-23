import React, {useMemo} from 'react';
import './sortSwitcher.scss';
import {getDisplayValue, SortOptions} from "./SortOptions";
import {connect} from "react-redux";
import {RootState} from "../../../../../store";
import {updateSortBy} from "../../../../../store/moviesList/actions";
import {MoviesListActionTypes} from "../../../../../store/moviesList/types";
import {compose} from "redux";

interface ISortSwitcherProps {
    activeSortByOption: string;
    updateSortBy?(sortBy: string): MoviesListActionTypes;
}

const SortSwitcher: React.FC<ISortSwitcherProps> = ({ activeSortByOption, updateSortBy }) => {
    const optionsList = useMemo(() => {
        return Object.keys(SortOptions).map(option =>
            <li onClick={() =>updateSortBy(option.toLowerCase())}
                key={option}
                className="sort-switcher-option">
                {getDisplayValue(option)}
            </li>)
    }, []);

    return (
      <div className="sort-switcher">
          <span className="sort-switcher-description">SORT BY</span>
          <div className="sort-switcher-dropdown">
              <span className="sort-switcher-active-option">{getDisplayValue(activeSortByOption)}</span>
              <div className="sort-switcher-dropdown-content">
                  <ul>
                      {optionsList}
                  </ul>
              </div>
          </div>
      </div>
    );
}

const mapStateToProps = (state: RootState): ISortSwitcherProps => {
    return {
        activeSortByOption: state.movies.sortBy
    }
};

const mapDispatchToProps = { updateSortBy };

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    React.memo
)(SortSwitcher);
