import React from "react";
import './addMovieButton.scss';

interface AddMovieButtonProps {
    openAddMoviePopupHandler(): void;
}

const AddMovieButton: React.FC<AddMovieButtonProps> = ({ openAddMoviePopupHandler }) =>
    <button onClick={openAddMoviePopupHandler}
            className="add-movie-btn">
        + ADD MOVIE
    </button>;

export default React.memo(AddMovieButton);