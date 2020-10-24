import {
    CLOSE_MOVIE_POPUP,
    MoviePopupsActionTypes,
    OPEN_MOVIE_POPUP,
    REQUEST_CREATE_MOVIE,
    REQUEST_UPDATE_MOVIE
} from "./types";
import {IMoviesItem, IMoviesServerItem} from "../../components/home/main/search-results/movies-list/IMoviesItem";

export const openPopup = (name: string, title: string, movie?: IMoviesItem): MoviePopupsActionTypes => ({
    type: OPEN_MOVIE_POPUP,
    payload: { name: name, title: title, movie: movie }
});

export const closePopup = (): MoviePopupsActionTypes => ({ type: CLOSE_MOVIE_POPUP });

export const createMovie = (movie: IMoviesServerItem): MoviePopupsActionTypes => ({
    type: REQUEST_CREATE_MOVIE,
    payload: {
        method: 'POST',
        movie,
    }
});

export const updateMovie = (movie: IMoviesServerItem): MoviePopupsActionTypes => ({
    type: REQUEST_UPDATE_MOVIE,
    payload: {
        method: 'PUT',
        movie: movie
    }
});
