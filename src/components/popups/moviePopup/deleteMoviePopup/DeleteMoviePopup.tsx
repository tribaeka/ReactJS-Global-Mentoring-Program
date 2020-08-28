import React from 'react';
import { useDispatch } from 'react-redux';
import CloseBtn, { CloseBtnSizes } from '../../../shared/closeBtn/CloseBtn';
import { IMoviePopupProps } from '../IMoviePopupProps';
import { closePopup } from "../../../../store/moviePopups/actions";

const DeleteMoviePopup: React.FC<IMoviePopupProps> = ({ title, movie }) => {

    const dispatch = useDispatch();

    function close() {
        dispatch(closePopup())
    }

    return (
        <div className="popup movie-popup delete-movie-popup">
            <div className="movie-popup-close-btn">
                <CloseBtn clickHandler={close} size={CloseBtnSizes.BIG}/>
            </div>
            <h2>{title}</h2>
            <p className="confirm-message">Are you sure you want to delete {movie.title}?</p>
            <button className="delete-confirm-btn">CONFIRM</button>
        </div>
    );
}

export default DeleteMoviePopup;
