import React from 'react';
import {IMoviesItem} from "../../home/main/search-results/movies-list/IMoviesItem";

const MovieForm: React.FC<IMoviesItem> = ({ title, year, movieURL, subTitle, overview, runtime}) => {
    return (
        <form className="add-movie-form">
            <div className="form-control">
                <label className="form-label">
                    TITLE
                </label>
                <input className="form-input"
                       defaultValue={title}
                       type="text"
                       placeholder="Enter title"/>
            </div>
            <div className="form-control">
                <label className="form-label">
                    RELEASE DATE
                </label>
                <input className="form-input"
                       defaultValue={year}
                       type="text"
                       placeholder="Select date"/>
            </div>
            <div className="form-control">
                <label className="form-label">
                    MOVIE URL
                </label>
                <input className="form-input"
                       defaultValue={movieURL}
                       type="text"
                       placeholder="Movie URL here"/>
            </div>
            <div className="form-control">
                <label className="form-label">
                    GENRE
                </label>
                <input className="form-input"
                       defaultValue={subTitle}
                       type="text"
                       placeholder="Select Genre"/>
            </div>
            <div className="form-control">
                <label className="form-label">
                    OVERVIEW
                </label>
                <input className="form-input"
                       defaultValue={overview}
                       type="text"
                       placeholder="Overview here"/>
            </div>
            <div className="form-control">
                <label className="form-label">
                    RUNTIME
                </label>
                <input className="form-input"
                       defaultValue={runtime}
                       type="text"
                       placeholder="Runtime here"/>
            </div>
            <div className="form-btn-control">
                <button className="form-btn" type="reset">
                    RESET
                </button>
                <button className="form-btn" type="submit">
                    SUBMIT
                </button>
            </div>
        </form>
    );
}

export default MovieForm;
