import React from 'react';
import './movieForm.scss';
import { IMoviesItem } from "@components/home/main/search-results/movies-list/IMoviesItem";
import {Field, Formik} from "formik";
import * as Yup from 'yup';
import Utils from "../../Utils";
import {closePopup} from "../../../store/moviePopups/actions";

interface IMovieFormProps {
    movie?: IMoviesItem;
    method: string;
    afterSubmitHandler: typeof closePopup;
}

const emptyMovie = {
    budget: undefined,
    genres: '',
    id: undefined,
    overview: '',
    posterPath: '',
    releaseDate: '',
    revenue: undefined,
    runtime: '',
    tagline: undefined,
    title: '',
    voteAverage: undefined,
    voteCount: undefined
};
const REQUIRED_ERROR_MESSAGE = 'This field is required';
const generateToShortErrorMessage = (minSize: number): string =>
    `This field should contains at least ${minSize} characters`;
const generateToLongErrorMessage = (maxSize: number): string =>
    `This field should contains up to ${maxSize} characters`;

const MovieFormSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, generateToShortErrorMessage(2))
        .max(50, generateToLongErrorMessage(50))
        .required(REQUIRED_ERROR_MESSAGE),
    posterPath: Yup.string()
        .url('Invalid URL')
        .required(REQUIRED_ERROR_MESSAGE),
    genres: Yup.string()
        .min(3, generateToShortErrorMessage(3))
        .max(100, generateToLongErrorMessage(100))
        .required(REQUIRED_ERROR_MESSAGE),
    overview: Yup.string()
        .required(REQUIRED_ERROR_MESSAGE),
    runtime: Yup.number()
        .required(REQUIRED_ERROR_MESSAGE)
});

const MovieForm: React.FC<IMovieFormProps> = (
    {
        movie,
        method,
        afterSubmitHandler
    }) => {
    return (
        <Formik
        initialValues={movie ? {...movie} : {...emptyMovie}}
        validationSchema={MovieFormSchema}
        onSubmit={(values: IMoviesItem, { setSubmitting }) => {
            setTimeout(() => {
                console.log(Utils.parseMoviesItem(values));
                const requestOptions = {
                    method: method,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(Utils.parseMoviesItem(values))
                };
                fetch(process.env.API_URL, requestOptions)
                    .then(response => response.json())
                    .then(data => console.log(data));
                setSubmitting(false);
                afterSubmitHandler();
            }, 400);
        }}
        >
            {({
                  errors,
                  touched,
                  handleSubmit,
                  handleReset,
                  isSubmitting,
              }) => (
                    <form className="add-movie-form" onSubmit={handleSubmit} onReset={handleReset}>
                        <div className="form-control">
                            <label className="form-label">
                                TITLE
                            </label>
                            <Field as="input"
                                   className="form-input"
                                   name="title"
                                   type="text"
                                   placeholder="Enter title"/>
                            {errors.title && touched.title ?
                                (<span className="error-message">{errors.title}</span>)
                                : null}
                        </div>
                        <div className="form-control">
                            <label className="form-label">
                                RELEASE DATE
                            </label>
                            <Field as="input"
                                   className="form-input"
                                   name="releaseDate"
                                   type="date"
                                   placeholder="Select date"/>
                            {errors.releaseDate && touched.releaseDate ?
                                (<span className="error-message">{errors.releaseDate}</span>)
                                : null}
                        </div>
                        <div className="form-control">
                            <label className="form-label">
                                MOVIE POSTER URL
                            </label>
                            <Field as="input"
                                   className="form-input"
                                   name="posterPath"
                                   type="text"
                                   placeholder="Movie URL here"/>
                            {errors.posterPath && touched.posterPath ?
                                (<span className="error-message">{errors.posterPath}</span>)
                                : null}
                        </div>
                        <div className="form-control">
                            <label className="form-label">
                                GENRE
                            </label>
                            <Field as="input"
                                   className="form-input"
                                   name="genres"
                                   type="text"
                                   placeholder="Select Genre"/>
                            {errors.genres && touched.genres ?
                                (<span className="error-message">{errors.genres}</span>)
                                : null}
                        </div>
                        <div className="form-control">
                            <label className="form-label">
                                OVERVIEW
                            </label>
                            <Field as="textarea"
                                   className="form-input"
                                   name="overview"
                                   type="text"
                                   rows="4"
                                   placeholder="Overview here"/>
                            {errors.overview && touched.overview
                                ?(<span className="error-message">{errors.overview}</span>)
                                : null}
                        </div>
                        <div className="form-control">
                            <label className="form-label">
                                RUNTIME
                            </label>
                            <Field as="input"
                                   className="form-input"
                                   name="runtime"
                                   type="text"
                                   placeholder="Runtime here"/>
                            {errors.runtime && touched.runtime
                                ? (<span className="error-message">{errors.runtime}</span>)
                                : null}
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
                )}
        </Formik>
    );
}

export default MovieForm;
