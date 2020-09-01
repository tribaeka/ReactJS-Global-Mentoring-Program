import React, {useCallback} from 'react';
import { useDispatch } from 'react-redux';
import Brand from '@components/shared/brand/Brand';
import { openPopup } from "@store/moviePopups/actions";
import { MOVIE_POPUPS_MAP } from "@store/moviePopups/types";
import './actionBar.scss';

const ActionBar: React.FC = () => {
    const dispatch = useDispatch();

    const openAddMoviePopup = useCallback(() =>
        dispatch(openPopup(MOVIE_POPUPS_MAP.ADD, 'ADD MOVIE')), []);

    return (
        <div className="action-bar-container">
            <Brand/>
            <button onClick={openAddMoviePopup}
                    className="add-movie-btn">
                + ADD MOVIE
            </button>
        </div>
    );
}

export default ActionBar;
