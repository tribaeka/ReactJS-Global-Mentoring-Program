import React from 'react';
import CloseBtn, { CloseBtnSizes } from '@components/shared/close-btn/CloseBtn';
import {connect} from 'react-redux';
import MovieForm from '@components/shared/movie-form/MovieForm';
import {closePopup, createMovie} from "@store/moviePopups/actions";
import {compose} from "redux";

interface IAddMoviePopupProps {
    title: string;
    createMovie: typeof createMovie;
    closePopup: typeof closePopup;
}

const AddMoviePopup: React.FC<IAddMoviePopupProps> = ({ title, createMovie, closePopup }) => {

    return (
        <div className="popup movie-popup">
            <div className="movie-popup-close-btn">
                <CloseBtn clickHandler={closePopup} size={CloseBtnSizes.BIG}/>
            </div>
            <h2>{title}</h2>
            <MovieForm afterSubmitHandler={closePopup} submitHandlerAction={createMovie}/>
        </div>
    );
};

const mapDispatchToProps = { createMovie, closePopup };

export default compose(
    connect(null, mapDispatchToProps),
    React.memo
)(AddMoviePopup);
