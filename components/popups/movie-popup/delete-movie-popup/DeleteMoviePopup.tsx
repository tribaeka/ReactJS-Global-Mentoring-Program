import React from 'react';
import {connect} from 'react-redux';
import CloseBtn, { CloseBtnSizes } from '@components/shared/close-btn/CloseBtn';
import { IMoviePopupProps } from '@components/popups/movie-popup/IMoviePopupProps';
import { closePopup } from "@store/moviePopups/actions";
import styles from './../moviePopup.module.scss';
import {compose} from "redux";

const DeleteMoviePopup: React.FC<IMoviePopupProps> = ({ title, movie, closePopup }) => {

    return (
        <div className={`${styles.moviePopup} ${styles.deleteMoviePopup}`}>
            <div className={styles.moviePopupCloseBtn}>
                <CloseBtn clickHandler={closePopup}
                          size={CloseBtnSizes.BIG}/>
            </div>
            <h2>{title}</h2>
            <p className={styles.confirmMessage}>
                Are you sure you want to delete {movie.title}?
            </p>
            <button className={styles.deleteConfirmBtn}>
                CONFIRM
            </button>
        </div>
    );
};

const mapDispatchToProps = { closePopup };

export default compose(
    connect(null, mapDispatchToProps),
    React.memo
)(DeleteMoviePopup);
