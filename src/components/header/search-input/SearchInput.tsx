import React, {useCallback, useState} from 'react';
import './searchInput.scss';
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import { updateSearch } from "../../../store/moviesList/actions";

interface ISearchInputProps {
    updateSearch: typeof updateSearch;
}

const SearchInput: React.FC<ISearchInputProps> = ({ updateSearch }) => {
    const { search } = useParams();
    const [ searchQuery, setSearchQuery ] = useState<string | undefined>(search)
    const searchChangeHandler = useCallback((event: React.SyntheticEvent<HTMLInputElement>) =>
        setSearchQuery(event.currentTarget.value), []);
    const searchUpdateHandler = useCallback(() => updateSearch(searchQuery), []);

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
                      onClick={searchUpdateHandler}
                      className="search-submit-btn">
                    SEARCH
                </Link>
            </div>
        </div>
    )
};

export default React.memo(SearchInput);
