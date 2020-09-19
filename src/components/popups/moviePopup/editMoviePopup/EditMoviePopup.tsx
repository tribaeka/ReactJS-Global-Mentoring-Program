import React from 'react';
import CloseBtn, { CloseBtnSizes } from '@components/shared/closeBtn/CloseBtn';
import {connect} from 'react-redux';
import MovieForm from '@components/shared/movieForm/MovieForm';
import { IMoviePopupProps } from '@components/popups/moviePopup/IMoviePopupProps';
import { closePopup } from "@store/moviePopups/actions";
import {compose} from "redux";

const EditMoviePopup: React.FC<IMoviePopupProps> = ({ title, movie, closePopup }) => {

    return (
        <div className="popup movie-popup">
            <div className="movie-popup-close-btn">
                <CloseBtn clickHandler={closePopup} size={CloseBtnSizes.BIG}/>
            </div>
            <h2>{title}</h2>
            <MovieForm movie={movie} method={'PUT'}/>
        </div>
    );
}

export default compose(
    connect(null, {closePopup}),
    React.memo
)(EditMoviePopup);
