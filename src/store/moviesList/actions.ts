import {
    MoviesListActionTypes,
    REQUEST_GET_MOVIES_LIST,
    UPDATE_FILTER_QUERY,
    UPDATE_SEARCH_QUERY,
    UPDATE_SORT_BY_QUERY
} from "./types";

export function getMoviesList(): MoviesListActionTypes {
    return {
        type: REQUEST_GET_MOVIES_LIST
    }
}

export function updateSortBy(sortBy: string): MoviesListActionTypes {
    return {
        type: UPDATE_SORT_BY_QUERY,
        payload: {
            sortBy: sortBy
        }
    }
}

export function updateFilter(filter: string): MoviesListActionTypes {
    return {
        type: UPDATE_FILTER_QUERY,
        payload: {
            filter: filter === 'all' ? '' : filter
        }
    }
}

export function updateSearch(search: string): MoviesListActionTypes {
    return {
        type: UPDATE_SEARCH_QUERY,
        payload: {
            search: search
        }
    }
}