import {MoviesListActionTypes, REQUEST_GET_MOVIES_LIST} from "./types";

export function getMoviesList(limit?: number): MoviesListActionTypes {
    return {
        type: REQUEST_GET_MOVIES_LIST
    }
}