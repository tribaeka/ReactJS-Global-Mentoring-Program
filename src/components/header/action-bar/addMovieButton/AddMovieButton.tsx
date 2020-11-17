import React from "react";
import './addMovieButton.scss';

interface AddMovieButtonProps {
    actionHandler(): void;
}

const AddMovieButton: React.FC<AddMovieButtonProps> = ({ actionHandler }) =>
    <button onClick={actionHandler}
            className="add-movie-btn">
        + ADD MOVIE
    </button>;

export default React.memo(AddMovieButton);