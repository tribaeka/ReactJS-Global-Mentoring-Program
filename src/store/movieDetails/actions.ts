import {CLEAR_MOVIE, MovieDetailsActionTypes, SET_MOVIE} from "./types";
import {IMoviesItem} from "../../components/home/main/search-results/movies-list/IMoviesItem";

export function updateMovieDetails(movie: IMoviesItem): MovieDetailsActionTypes {
    return {
        type: SET_MOVIE,
        payload: { movie: movie }
    }
}

export function closeMovieDetails(): MovieDetailsActionTypes {
    return { type: CLEAR_MOVIE }
}