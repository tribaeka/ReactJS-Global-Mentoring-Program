import React, { useState } from 'react';

const SortSwitcher: React.FC = () => {
    const options = ['RELEASE DATE', 'RELEVANT']
    const [activeOption, setActiveOption] = useState(options[0])

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
                      {
                          options.map(option =>
                          <li onClick={() =>sortOptionClickHandler(option)}
                              key={option}
                              className="sort-switcher-option">
                              {option}
                          </li>)
                      }
                  </ul>
              </div>
          </div>

      </div>
    );
}

export default SortSwitcher;
