import React from 'react';
import CloseBtn, { CloseBtnSizes } from '../../shared/closeBtn/CloseBtn';
import { useDispatch } from 'react-redux';

const AddMoviePopup: React.FC = () => {

    const dispatch = useDispatch();

    function closePopup() {
        dispatch({type: 'CLOSE_ADD_MOVIE_POPUP'})
    }

    return (
        <div className="popup addMoviePopup">
            <div className="add-movie-popup-close-btn">
                <CloseBtn clickHandler={closePopup} size={CloseBtnSizes.BIG}/>
            </div>
            <h1>ADD MOVIE</h1>
            <form className="add-movie-form">
                <div className="form-control">
                    <label className="form-label" htmlFor="">TITLE</label>
                    <input className="form-input" type="text" placeholder="Enter title"/>
                </div>
                <div className="form-control">
                    <label className="form-label" htmlFor="">RELEASE DATE</label>
                    <input className="form-input" type="date" placeholder="Select date"/>
                </div>
                <div className="form-control">
                    <label className="form-label" htmlFor="">MOVIE URL</label>
                    <input className="form-input" type="text" placeholder="Movie URL here"/>
                </div>
                <div className="form-control">
                    <label className="form-label" htmlFor="">GENRE</label>
                    <input className="form-input" type="text" placeholder="Select Genre"/>
                </div>
                <div className="form-control">
                    <label className="form-label" htmlFor="">OVERVIEW</label>
                    <input className="form-input" type="text" placeholder="Overview here"/>
                </div>
                <div className="form-control">
                    <label className="form-label" htmlFor="">RUNTIME</label>
                    <input className="form-input" type="text" placeholder="Runtime here"/>
                </div>
                <div className="form-btn-control">
                    <button className="form-btn" type="reset">RESET</button>
                    <button className="form-btn" type="submit">SUBMIT</button>
                </div>
            </form>
        </div>
    );
}

export default AddMoviePopup;
