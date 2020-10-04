import React, {useCallback, useState} from 'react';
import './searchInput.scss';
import {useParams} from "react-router";
import {Link} from "react-router-dom";

const SearchInput: React.FC = () => {
    const { search } = useParams();
    const [ searchQuery, setSearchQuery ] = useState<string | undefined>(search)
    const searchChangeHandler = useCallback((event: React.SyntheticEvent<HTMLInputElement>) =>
        setSearchQuery(event.currentTarget.value), []);

    return (
        <div className="search-input-container">
            <span className="search-heading">FIND YOUR MOVIE</span>
            <div className="search-form">
                <input className="search-input"
                       value={searchQuery}
                       onChange={searchChangeHandler}
                       type="text"
                       placeholder="What do you want to watch?"/>
                <Link to={`/search/${searchQuery}`}
                      className="search-submit-btn">
                    SEARCH
                </Link>
            </div>
        </div>
    )
};

export default React.memo(SearchInput);
