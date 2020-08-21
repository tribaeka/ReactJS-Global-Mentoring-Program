import React from 'react';
import CloseBtn, { CloseBtnSizes } from '../../../shared/closeBtn/CloseBtn';
import { useDispatch } from 'react-redux';
import MovieForm from '../../../shared/movieForm/MovieForm';

const AddMoviePopup: React.FC = () => {

    const dispatch = useDispatch();

    function closePopup() {
        dispatch({type: 'CLOSE_MOVIE_POPUP'})
    }

    return (
        <div className="popup movie-popup">
            <div className="movie-popup-close-btn">
                <CloseBtn clickHandler={closePopup} size={CloseBtnSizes.BIG}/>
            </div>
            <h1>ADD MOVIE</h1>
            <MovieForm/>
        </div>
    );
}

export default AddMoviePopup;
