import React from 'react';
import CloseBtn, { CloseBtnSizes } from '../../../shared/closeBtn/CloseBtn';
import { useDispatch } from 'react-redux';
import MovieForm from '../../../shared/movieForm/MovieForm';
import { IMoviePopupProps } from '../IMoviePopupProps';
import { closePopup } from "../../../../store/moviePopups/actions";

const AddMoviePopup: React.FC<IMoviePopupProps> = ({ title }) => {

    const dispatch = useDispatch();

    function close() {
        dispatch(closePopup())
    }

    return (
        <div className="popup movie-popup">
            <div className="movie-popup-close-btn">
                <CloseBtn clickHandler={close} size={CloseBtnSizes.BIG}/>
            </div>
            <h2>{title}</h2>
            <MovieForm/>
        </div>
    );
}

export default AddMoviePopup;
