import React from 'react';
import CloseBtn, { CloseBtnSizes } from '../../../shared/closeBtn/CloseBtn';
import { useDispatch } from 'react-redux';
import MovieForm from '../../../shared/movieForm/MovieForm';
import { IMoviePopupProps } from '../IMoviePopupProps';

const EditMoviePopup: React.FC<IMoviePopupProps> = ({ title, movie }) => {

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
            <MovieForm movie={movie}/>
        </div>
    );
}

export default EditMoviePopup;
