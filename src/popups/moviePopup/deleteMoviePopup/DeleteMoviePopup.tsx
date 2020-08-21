import React from 'react';
import { useDispatch } from 'react-redux';
import CloseBtn, { CloseBtnSizes } from '../../../shared/closeBtn/CloseBtn';

const DeleteMoviePopup: React.FC = () => {

    const dispatch = useDispatch();

    function closePopup() {
        dispatch({type: 'CLOSE_MOVIE_POPUP'})
    }

    return (
        <div className="popup movie-popup">
            <div className="movie-popup-close-btn">
                <CloseBtn clickHandler={closePopup} size={CloseBtnSizes.BIG}/>
            </div>
            <h1>DELETE MOVIE</h1>
            <p>Are you sure you want to delete this movie</p>
            <button className="delete-confirm-btn">CONFIRM</button>
        </div>
    );
}

export default DeleteMoviePopup;
