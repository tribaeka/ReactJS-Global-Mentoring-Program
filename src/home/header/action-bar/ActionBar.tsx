import React from 'react';
import { useDispatch } from 'react-redux';

const ActionBar: React.FC = () => {
    const dispatch = useDispatch();

    function openAddMoviePopup() {
        dispatch({type: 'OPEN_MOVIE_POPUP', payload: 'addMoviePopup'})
    }

    return (
        <div className="action-bar-container">
            <h3 className="brand">My own netflix roulette</h3>
            <button onClick={openAddMoviePopup}
                    className="add-movie-btn">
                + ADD MOVIE
            </button>
        </div>
    );
}

export default ActionBar;
