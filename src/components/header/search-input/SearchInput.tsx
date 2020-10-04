import React, {useCallback, useEffect, useState} from 'react';
import './searchInput.scss';
import {useHistory, useParams} from "react-router";
import {Link} from "react-router-dom";

const SearchInput: React.FC = () => {
    const history = useHistory();
    const { search } = useParams();
    const [ searchQuery, setSearchQuery ] = useState<string | undefined>(search)
    const searchChangeHandler = useCallback((event: React.SyntheticEvent<HTMLInputElement>) =>
        setSearchQuery(event.currentTarget.value), []);
    const executeSearch = (event: React.SyntheticEvent) => {
        event.preventDefault();
        history.push(`/search/${searchQuery}`)
    }
    useEffect(() => console.log('input rerender'), []);

    return (
        <div className="search-input-container">
            <span className="search-heading">FIND YOUR MOVIE</span>
            <form onSubmit={executeSearch} className="search-form">
                <input className="search-input"
                       value={searchQuery}
                       onChange={searchChangeHandler}
                       type="text"
                       placeholder="What do you want to watch?"/>
                <Link to={`/search/${searchQuery}`}
                      className="search-submit-btn">
                    SEARCH
                </Link>
            </form>
        </div>
    )
};

export default React.memo(SearchInput);