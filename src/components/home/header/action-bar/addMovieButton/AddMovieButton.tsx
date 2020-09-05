import React, {useCallback} from "react";
import './addMovieButton.scss';
import {useDispatch} from "react-redux";
import {openPopup} from "../../../../../store/moviePopups/actions";
import {MOVIE_POPUPS_MAP} from "../../../../../store/moviePopups/types";

const AddMovieButton: React.FC = () => {
    const dispatch = useDispatch();
    const openAddMoviePopup = useCallback(() =>
        dispatch(openPopup(MOVIE_POPUPS_MAP.ADD, 'ADD MOVIE')), []);

    return (
        <button onClick={openAddMoviePopup}
                className="add-movie-btn">
            + ADD MOVIE
        </button>
    );
}

export default AddMovieButton;