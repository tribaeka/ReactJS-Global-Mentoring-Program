import {
    CLOSE_MOVIE_POPUP,
    MoviePopupsActionTypes,
    OPEN_MOVIE_POPUP,
    REQUEST_CREATE_MOVIE,
    REQUEST_UPDATE_MOVIE
} from "./types";
import {IMoviesItem, IMoviesServerItem} from "@components/search-results/movies-list/IMoviesItem";

export function openPopup(name: string, title: string, movie?: IMoviesItem): MoviePopupsActionTypes {
    return {
        type: OPEN_MOVIE_POPUP,
        payload: { name: name, title: title, movie: movie }
    }
}

export function closePopup(): MoviePopupsActionTypes {
    return { type: CLOSE_MOVIE_POPUP }
}

export function createMovie(movie: IMoviesServerItem): MoviePopupsActionTypes {
    return {
        type: REQUEST_CREATE_MOVIE,
        payload: {
            method: 'POST',
            movie: movie
        }
    }
}

export function updateMovie(movie: IMoviesServerItem): MoviePopupsActionTypes {
    return {
        type: REQUEST_UPDATE_MOVIE,
        payload: {
            method: 'PUT',
            movie: movie
        }
    }
}
