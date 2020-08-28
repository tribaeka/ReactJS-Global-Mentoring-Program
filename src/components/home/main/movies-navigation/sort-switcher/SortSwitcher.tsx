import React, {useMemo, useState} from 'react';
import {SORT_SWITCHER_OPTIONS} from "./constants";

const SortSwitcher: React.FC = () => {
    const [activeOption, setActiveOption] = useState(SORT_SWITCHER_OPTIONS[0]) //todo useMemo?
    const optionsList = useMemo(() => {
        return SORT_SWITCHER_OPTIONS.map(option =>
            <li onClick={() =>sortOptionClickHandler(option)}
                key={option}
                className="sort-switcher-option">
                {option}
            </li>)
    }, []);

    function sortOptionClickHandler(option: string): void {
        setActiveOption(option);
    }

    return (
      <div className="sort-switcher">
          <span className="sort-switcher-description">SORT BY</span>
          <div className="sort-switcher-dropdown">
              <span className="sort-switcher-active-option">{activeOption}</span>
              <div className="sort-switcher-dropdown-content">
                  <ul>
                      {optionsList}
                  </ul>
              </div>
          </div>
      </div>
    );
}

export default SortSwitcher;
