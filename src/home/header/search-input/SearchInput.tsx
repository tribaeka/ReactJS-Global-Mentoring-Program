import React from 'react';

const SearchInput = () => {
    return (
        <div className="search-input-container">
            <span className="search-heading">FIND YOUR MOVIE</span>
            <form className="search-form">
                <input className="search-input" type="text" placeholder={'What do you want to watch?'}/>
                <button className="search-submit-btn" type={'submit'}>SEARCH</button>
            </form>
        </div>
    )
}

export default SearchInput;
