import React from 'react';
import CloseBtn, { CloseBtnSizes } from '@components/shared/closeBtn/CloseBtn';
import {connect} from 'react-redux';
import MovieForm from '@components/shared/movieForm/MovieForm';
import { IMoviePopupProps } from '@components/popups/moviePopup/IMoviePopupProps';
import { closePopup } from "@store/moviePopups/actions";
import {compose} from "redux";

const AddMoviePopup: React.FC<IMoviePopupProps> = ({ title, closePopup }) => {

    return (
        <div className="popup movie-popup">
            <div className="movie-popup-close-btn">
                <CloseBtn clickHandler={closePopup} size={CloseBtnSizes.BIG}/>
            </div>
            <h2>{title}</h2>
            <MovieForm method={'POST'}/>
        </div>
    );
}

export default compose(
    connect(null, {closePopup}),
    React.memo
)(AddMoviePopup);
