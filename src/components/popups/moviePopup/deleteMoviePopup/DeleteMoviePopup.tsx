import React from 'react';
import {connect} from 'react-redux';
import CloseBtn, { CloseBtnSizes } from '@components/shared/closeBtn/CloseBtn';
import { IMoviePopupProps } from '@components/popups/moviePopup/IMoviePopupProps';
import { closePopup } from "@store/moviePopups/actions";
import './deleteMoviePopup.scss';
import {compose} from "redux";

const DeleteMoviePopup: React.FC<IMoviePopupProps> = ({ title, movie, closePopup }) => {

    return (
        <div className="popup movie-popup delete-movie-popup">
            <div className="movie-popup-close-btn">
                <CloseBtn clickHandler={closePopup} size={CloseBtnSizes.BIG}/>
            </div>
            <h2>{title}</h2>
            <p className="confirm-message">Are you sure you want to delete {movie.title}?</p>
            <button className="delete-confirm-btn">CONFIRM</button>
        </div>
    );
};

const mapDispatchToProps = { closePopup };

export default compose(
    connect(null, mapDispatchToProps),
    React.memo
)(DeleteMoviePopup);
