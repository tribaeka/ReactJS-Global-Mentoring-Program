import {
    MoviesListActionTypes,
    REQUEST_GET_MOVIES_LIST,
    UPDATE_FILTER_QUERY,
    UPDATE_SEARCH_QUERY,
    UPDATE_SORT_BY_QUERY
} from "./types";

export const getMoviesList(search: string): MoviesListActionTypes => ({
    type: REQUEST_GET_MOVIES_LIST,
    payload: {
        search: search
    });

export const updateSortBy = (sortBy: string): MoviesListActionTypes => ({
    type: UPDATE_SORT_BY_QUERY,
    payload: {
        sortBy: sortBy
    }
});

export const updateFilter = (filter: string): MoviesListActionTypes => ({
    type: UPDATE_FILTER_QUERY,
    payload: {
        filter: filter === 'all' ? '' : filter
    }
});

export const updateSearch = (search: string): MoviesListActionTypes => ({
    type: UPDATE_SEARCH_QUERY,
    payload: {
        search: search
    }
});
