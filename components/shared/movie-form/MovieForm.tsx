import React from 'react';
import styles from './movieForm.module.scss';
import {IMoviesItem} from "@components/search-results/movies-list/IMoviesItem";
import {Formik} from "formik";
import * as Yup from 'yup';
import Utils from "@components/Utils";
import {closePopup, createMovie, updateMovie} from "@store/moviePopups/actions";
import MovieFormTextField from "./movieFormField/MovieFormField";

interface IMovieFormProps {
    movie?: IMoviesItem;
    submitHandlerAction: typeof createMovie | typeof updateMovie;
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
    releaseDate: Yup.string(),
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
        submitHandlerAction,
        afterSubmitHandler
    }) => {
    return (
        <Formik
            initialValues={movie ? {...movie} : {...emptyMovie}}
            validationSchema={MovieFormSchema}
            onSubmit={(values: IMoviesItem, { setSubmitting }) => {
                submitHandlerAction(Utils.parseMoviesItem(values))
                setSubmitting(false);
                afterSubmitHandler();
            }}
        >
            {({
                  errors,
                  touched,
                  handleSubmit,
                  handleReset
              }) => (
                    <form className={styles.addMovieForm}
                          onSubmit={handleSubmit}
                          onReset={handleReset}>
                        <MovieFormTextField labelTitle={'TITLE'}
                                            fieldName={'title'}
                                            placeholder={'Enter title'}
                                            errors={errors}
                                            touched={touched}/>
                        <MovieFormTextField labelTitle={'RELEASE DATE'}
                                            fieldName={'releaseDate'}
                                            placeholder={'Select date'}
                                            errors={errors}
                                            touched={touched}
                                            type={'date'}/>
                        <MovieFormTextField labelTitle={'MOVIE POSTER URL'}
                                            fieldName={'posterPath'}
                                            placeholder={'Movie URL here'}
                                            errors={errors}
                                            touched={touched}/>
                        <MovieFormTextField labelTitle={'GENRE'}
                                            fieldName={'genres'}
                                            placeholder={'Enter genres (like genre1, genre2,...)'}
                                            errors={errors}
                                            touched={touched}/>
                        <MovieFormTextField labelTitle={'OVERVIEW'}
                                            fieldName={'overview'}
                                            placeholder={'Overview here'}
                                            errors={errors}
                                            touched={touched}
                                            type={'textarea'}/>
                        <MovieFormTextField labelTitle={'RUNTIME'}
                                            fieldName={'runtime'}
                                            placeholder={'Runtime here'}
                                            errors={errors}
                                            touched={touched}/>
                        <div className={styles.formBtnControl}>
                            <button className={styles.formBtn}
                                    type="reset">
                                RESET
                            </button>
                            <button className={styles.formBtn}
                                    type="submit">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                )}
        </Formik>
    );
}

export default MovieForm;
