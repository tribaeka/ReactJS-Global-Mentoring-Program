import React from 'react';
import { useDispatch } from 'react-redux';
import CloseBtn, { CloseBtnSizes } from '../../../shared/closeBtn/CloseBtn';
import { IMoviePopupProps } from '../IMoviePopupProps';

const DeleteMoviePopup: React.FC<IMoviePopupProps> = ({ title, movie }) => {

    const dispatch = useDispatch();

    function closePopup() {
        dispatch({type: 'CLOSE_MOVIE_POPUP'})
    }

    return (
        <div className="popup movie-popup">
            <div className="movie-popup-close-btn">
                <CloseBtn clickHandler={closePopup} size={CloseBtnSizes.BIG}/>
            </div>
            <h1>{title}</h1>
            <p>Are you sure you want to delete {movie.title}?</p>
            <button className="delete-confirm-btn">CONFIRM</button>
        </div>
    );
}

export default DeleteMoviePopup;
