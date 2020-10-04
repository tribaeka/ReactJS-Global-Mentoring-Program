import React from 'react';
import CloseBtn, { CloseBtnSizes } from '@components/shared/close-btn/CloseBtn';
import {connect} from 'react-redux';
import MovieForm from '@components/shared/movie-form/MovieForm';
import {closePopup, updateMovie} from "@store/moviePopups/actions";
import {compose} from "redux";
import {IMoviesItem} from "@components/search-results/movies-list/IMoviesItem";

export interface IEditMoviePopupProps {
    title: string;
    movie: IMoviesItem;
    updateMovie: typeof updateMovie;
    closePopup?: typeof closePopup;
}

const EditMoviePopup: React.FC<IEditMoviePopupProps> = (
    {
        title,
        movie,
        updateMovie,
        closePopup
    }) => {

    return (
        <div className="popup movie-popup">
            <div className="movie-popup-close-btn">
                <CloseBtn clickHandler={closePopup} size={CloseBtnSizes.BIG}/>
            </div>
            <h2>{title}</h2>
            <MovieForm afterSubmitHandler={closePopup} movie={movie} submitHandlerAction={updateMovie}/>
        </div>
    );
};

const mapDispatchToProps = { updateMovie, closePopup };

export default compose(
    connect(null, mapDispatchToProps),
    React.memo
)(EditMoviePopup);
