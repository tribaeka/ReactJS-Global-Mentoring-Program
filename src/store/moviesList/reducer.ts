import {camelCase, mapKeys} from 'lodash';
import {IMoviesItem} from "../../components/home/main/search-results/movies-list/IMoviesItem";
import {
    GET_MOVIES_LIST,
    MoviesListActionTypes,
    UPDATE_FILTER_QUERY,
    UPDATE_SEARCH_QUERY,
    UPDATE_SORT_BY_QUERY
} from "./types";
import {SortOptions} from "../../components/home/main/movies-navigation/sort-switcher/SortOptions";
import {FilterOptions} from "../../components/home/main/movies-navigation/genreFilter/FilterOptions";

export interface MoviesListState {
    movies: IMoviesItem[];
    limit: number;
    offset: number;
    totalAmount: number;
    sortBy: string;
    filter: string;
    search: string;
}

const initialState: MoviesListState = {
    movies: [],
    limit: 12,
    offset: 0,
    totalAmount: 0,
    filter: FilterOptions.ALL,
    sortBy: SortOptions.RELEASE_DATE,
    search: ''
}

export const moviesListReducer =
    (state: MoviesListState = initialState, action: MoviesListActionTypes): MoviesListState => {
    switch (action.type) {
        case GET_MOVIES_LIST: {
            return {
                ...state,
                movies: action.payload.data.map(item => mapKeys(item, (value, key) => camelCase(key))),
                limit: action.payload.limit,
                offset: action.payload.offset,
                totalAmount: action.payload.totalAmount
            }
        }
        case UPDATE_SORT_BY_QUERY:
        case UPDATE_FILTER_QUERY:
        case UPDATE_SEARCH_QUERY: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }

}