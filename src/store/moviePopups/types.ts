import {IMoviesItem} from "../../components/home/main/search-results/movies-list/IMoviesItem";

export const OPEN_MOVIE_POPUP = 'OPEN_MOVIE_POPUP';
export const CLOSE_MOVIE_POPUP = 'CLOSE_MOVIE_POPUP';

export const MOVIE_POPUPS_MAP = {
    ADD: 'addMoviePopup',
    EDIT: 'editMoviePopup',
    DELETE: 'deleteMoviePopup'
}

export interface IMoviePopupsPayload {
    name: string;
    title: string;
    movie?: IMoviesItem;
}

interface IOpenMoviePopupAction {
    type: typeof OPEN_MOVIE_POPUP;
    payload: IMoviePopupsPayload;
}

interface ICloseMoviePopupAction {
    type: typeof CLOSE_MOVIE_POPUP;
}

export type MoviePopupsActionTypes = IOpenMoviePopupAction | ICloseMoviePopupAction