import React, {useCallback} from "react";
import './addMovieButton.scss';
import {connect} from "react-redux";
import {openPopup} from "../../../../../store/moviePopups/actions";
import {MOVIE_POPUPS_MAP} from "../../../../../store/moviePopups/types";
import {IMoviesItem} from "../../../main/search-results/movies-list/IMoviesItem";
import {compose} from "redux";

interface AddMovieButtonProps {
    openPopup(name: string, title: string, movie?: IMoviesItem): void;
}

const AddMovieButton: React.FC<AddMovieButtonProps> = ({ openPopup }) => {
    const openAddMoviePopup = useCallback(() =>
        openPopup(MOVIE_POPUPS_MAP.ADD, 'ADD MOVIE'), []);

    return (
        <button onClick={openAddMoviePopup}
                className="add-movie-btn">
            + ADD MOVIE
        </button>
    );
}

export default compose(
    connect(null, {openPopup}),
    React.memo
)(AddMovieButton);