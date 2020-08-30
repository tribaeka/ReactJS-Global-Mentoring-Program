import React, {useCallback} from 'react';

const SearchInput: React.FC = () => {
    const executeSearch = useCallback(() => console.log('search executing'), []);

    return (
        <div className="search-input-container">
            <span className="search-heading">FIND YOUR MOVIE</span>
            <form onSubmit={executeSearch} className="search-form">
                <input className="search-input" type="text" placeholder="What do you want to watch?"/>
                <button className="search-submit-btn" type="submit">SEARCH</button>
            </form>
        </div>
    )
}

export default SearchInput;
