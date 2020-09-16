import React, {useState} from 'react';
import './movieForm.scss';
import { IMoviesItem } from "@components/home/main/search-results/movies-list/IMoviesItem";
import Utils from "../../utils";

interface IMovieFormProps {
    movie?: IMoviesItem,
    method: string
}

const MovieForm: React.FC<IMovieFormProps> = ({ movie, method }) => {
    const emptyMovie = {
        budget: undefined,
        genres: undefined,
        id: new Date().getTime(),
        overview: undefined,
        posterPath: undefined,
        releaseDate: undefined,
        revenue: undefined,
        runtime: undefined,
        tagline: undefined,
        title: undefined,
        voteAverage: undefined,
        voteCount: undefined
    };
    const [movieForm, setMovieForm] = useState<IMoviesItem>(movie ? movie : emptyMovie);
    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(movieForm);
    };
    const inputChangeHandler = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        setMovieForm({
            ...movieForm,
            [name]: value
        })
        console.log(movieForm);
    }

    return (
        <form className="add-movie-form" onSubmit={submitHandler}>
            <div className="form-control">
                <label className="form-label">
                    TITLE
                </label>
                <input className="form-input"
                       value={movieForm.title}
                       onChange={inputChangeHandler}
                       name="title"
                       type="text"
                       placeholder="Enter title"/>
            </div>
            <div className="form-control">
                <label className="form-label">
                    RELEASE DATE
                </label>
                <input className="form-input"
                       value={Utils.getReleaseYear(movieForm.releaseDate)}
                       name="releaseDate"
                       type="text"
                       placeholder="Select date"/>
            </div>
            <div className="form-control">
                <label className="form-label">
                    MOVIE URL
                </label>
                <input className="form-input"
                       value={movieForm.posterPath}
                       onChange={inputChangeHandler}
                       name="posterPath"
                       type="text"
                       placeholder="Movie URL here"/>
            </div>
            <div className="form-control">
                <label className="form-label">
                    GENRE
                </label>
                <input className="form-input"
                       value={Utils.genresToString(movieForm.genres)}
                       name="genres"
                       type="text"
                       placeholder="Select Genre"/>
            </div>
            <div className="form-control">
                <label className="form-label">
                    OVERVIEW
                </label>
                <input className="form-input"
                       value={movieForm.overview}
                       onChange={inputChangeHandler}
                       name="overview"
                       type="text"
                       placeholder="Overview here"/>
            </div>
            <div className="form-control">
                <label className="form-label">
                    RUNTIME
                </label>
                <input className="form-input"
                       value={movieForm.runtime}
                       onChange={inputChangeHandler}
                       name="runtime"
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
