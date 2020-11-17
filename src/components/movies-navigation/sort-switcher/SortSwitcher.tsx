import React, {useMemo} from 'react';
import './sortSwitcher.scss';
import {getDisplayValue, SortOptions} from "./SortOptions";
import {updateSortBy} from "../../../store/moviesList/actions";

interface ISortSwitcherProps {
    activeSortByOption: string;
    updateSortBy: typeof updateSortBy;
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
};

export default React.memo(SortSwitcher);
