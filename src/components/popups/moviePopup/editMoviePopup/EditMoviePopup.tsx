import React from 'react';
import CloseBtn, { CloseBtnSizes } from '@components/shared/closeBtn/CloseBtn';
import { useDispatch } from 'react-redux';
import MovieForm from '@components/shared/movieForm/MovieForm';
import { IMoviePopupProps } from '@components/popups/moviePopup/IMoviePopupProps';
import { closePopup } from "@store/moviePopups/actions";

const EditMoviePopup: React.FC<IMoviePopupProps> = ({ title, movie }) => {

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
            <MovieForm
                id={movie.id}
                title={movie.title}
                year={movie.year}
                movieURL={movie.movieURL}
                subTitle={movie.subTitle}
                overview={movie.overview}
                runtime={movie.runtime}
            />
        </div>
    );
}

export default EditMoviePopup;
