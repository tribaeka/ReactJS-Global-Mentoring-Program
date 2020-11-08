import React from "react";
import styles from './addMovieButton.module.scss';

interface AddMovieButtonProps {
    actionHandler(): void;
}

const AddMovieButton: React.FC<AddMovieButtonProps> = ({ actionHandler }) =>
    <button onClick={actionHandler}
            className={styles.addMovieBtn}>
        + ADD MOVIE
    </button>;

export default React.memo(AddMovieButton);
