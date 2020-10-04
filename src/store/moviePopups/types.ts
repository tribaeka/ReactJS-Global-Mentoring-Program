import {IMoviesItem, IMoviesServerItem} from "@components/search-results/movies-list/IMoviesItem";

export const OPEN_MOVIE_POPUP = 'OPEN_MOVIE_POPUP';
export const CLOSE_MOVIE_POPUP = 'CLOSE_MOVIE_POPUP';
export const REQUEST_CREATE_MOVIE = 'REQUEST_CREATE_MOVIE';
export const REQUEST_UPDATE_MOVIE = 'REQUEST_UPDATE_MOVIE';

export const MOVIE_POPUPS_MAP = {
    ADD: 'addMoviePopup',
    EDIT: 'editMoviePopup',
    DELETE: 'deleteMoviePopup'
};

export interface IMoviePopupsPayload {
    name: string;
    title: string;
    movie?: IMoviesItem;
}

export interface IRequestMovieActionPayload {
    method: string;
    movie: IMoviesServerItem;
}

interface IOpenMoviePopupAction {
    type: typeof OPEN_MOVIE_POPUP;
    payload: IMoviePopupsPayload;
}

interface ICloseMoviePopupAction {
    type: typeof CLOSE_MOVIE_POPUP;
}

export interface IRequestCreateMovieAction {
    type: typeof REQUEST_CREATE_MOVIE;
    payload: IRequestMovieActionPayload;
}

export interface IRequestUpdateMovieAction {
    type: typeof REQUEST_UPDATE_MOVIE;
    payload: IRequestMovieActionPayload;
}

export type MoviePopupsActionTypes = IOpenMoviePopupAction
    | ICloseMoviePopupAction
    | IRequestCreateMovieAction
    | IRequestUpdateMovieAction;
