import React from 'react';

const HeaderSearchInput = () => {
    return (
        <div className="search-input-wrapper">
            <span className="search-heading">FIND YOUR MOVIE</span>
            <form className="search-form">
                <input className="search-input" type="text" placeholder={'What do you want to watch?'}/>
                <button className="search-submit-btn" type={'submit'}>SEARCH</button>
            </form>
        </div>
    )
}

export default HeaderSearchInput;
