import React from "react";
import './addMovieButton.scss';

interface AddMovieButtonProps {
    openPopupHandler(): void;
}

const AddMovieButton: React.FC<AddMovieButtonProps> = ({ openPopupHandler }) =>
    <button onClick={openPopupHandler}
            className="add-movie-btn">
        + ADD MOVIE
    </button>

export default React.memo(AddMovieButton);