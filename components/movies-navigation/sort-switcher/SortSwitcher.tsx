import React, { useMemo } from 'react';
import styles from './SortSwitcher.module.scss';
import { getDisplayValue, SortOptions } from "./SortOptions";
import { updateSortBy } from "@store/moviesList/actions";

interface ISortSwitcherProps {
    activeSortByOption: string;
    updateSortBy: typeof updateSortBy;
}

const SortSwitcher: React.FC<ISortSwitcherProps> = ({ activeSortByOption, updateSortBy }) => {
    const optionsList = useMemo(() => {
        return Object.keys(SortOptions).map(option =>
            <li onClick={() =>updateSortBy(option.toLowerCase())}
                key={option}
                className={styles.sortSwitcherOption}>
                {getDisplayValue(option)}
            </li>)
    }, []);

    return (
      <div className={styles.sortSwitcher}>
          <span className={styles.sortSwitcherDescription}>SORT BY</span>
          <div className={styles.sortSwitcherDropdown}>
              <span className={styles.sortSwitcherActiveOption}>{getDisplayValue(activeSortByOption)}</span>
              <div className={styles.sortSwitcherDropdownContent}>
                  <ul>
                      {optionsList}
                  </ul>
              </div>
          </div>
      </div>
    );
};

export default React.memo(SortSwitcher);
