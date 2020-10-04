import {IMoviesItem} from "@components/search-results/movies-list/IMoviesItem";

export const SET_MOVIE = 'SET_MOVIE';
export const CLEAR_MOVIE = 'CLEAR_MOVIE';

export interface IMovieDetailsPayload {
    movie: IMoviesItem;
}

interface ISetMovieAction {
    type: typeof SET_MOVIE;
    payload: IMovieDetailsPayload;
}

interface IClearMovieAction {
    type: typeof CLEAR_MOVIE;
}

export type MovieDetailsActionTypes = ISetMovieAction | IClearMovieAction;
