import React from 'react';
import { useDispatch } from 'react-redux';
import Brand from '../../../shared/brand/Brand';

const ActionBar: React.FC = () => {
    const dispatch = useDispatch();

    function openAddMoviePopup() {
        dispatch({type: 'OPEN_MOVIE_POPUP', payload: { name: 'addMoviePopup', title: 'ADD MOVIE' }})
    }

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
