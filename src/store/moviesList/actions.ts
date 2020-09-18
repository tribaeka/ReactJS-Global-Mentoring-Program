import {MoviesListActionTypes, REQUEST_GET_MOVIES_LIST, UPDATE_FILTER, UPDATE_SORT_BY} from "./types";

export function getMoviesList(): MoviesListActionTypes {
    return {
        type: REQUEST_GET_MOVIES_LIST
    }
}

export function updateSortBy(sortBy: string): MoviesListActionTypes {
    return {
        type: UPDATE_SORT_BY,
        payload: {
            sortBy: sortBy
        }
    }
}

export function updateFilter(filter: string): MoviesListActionTypes {
    return {
        type: UPDATE_FILTER,
        payload: {
            filter: filter
        }
    }
}