import React, {useState} from 'react';
import './searchInput.scss';
import {connect} from "react-redux";
import {RootState} from "../../../../store";
import {MoviesListActionTypes} from "../../../../store/moviesList/types";
import {updateSearch} from "../../../../store/moviesList/actions";

interface ISearchInputProps {
    search: string;
    updateSearch?(search: string): MoviesListActionTypes;
}

const SearchInput: React.FC<ISearchInputProps> = ({ search, updateSearch  }) => {
    const [activeSearchQuery, setActiveSearchQuery] = useState(search);
    const searchChangeHandler = (event: React.SyntheticEvent<HTMLInputElement>) => {
        setActiveSearchQuery(event.currentTarget.value);
    }
    const executeSearch = (event: React.SyntheticEvent) => {
        event.preventDefault();
        updateSearch(activeSearchQuery);
    }

    return (
        <div className="search-input-container">
            <span className="search-heading">FIND YOUR MOVIE</span>
            <form onSubmit={executeSearch} className="search-form">
                <input className="search-input"
                       value={activeSearchQuery}
                       onChange={searchChangeHandler}
                       type="text"
                       placeholder="What do you want to watch?"/>
                <button className="search-submit-btn" type="submit">SEARCH</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state: RootState): ISearchInputProps => {
    return {
        search: state.movies.search
    }
}

export default connect(mapStateToProps, {updateSearch})(SearchInput);
