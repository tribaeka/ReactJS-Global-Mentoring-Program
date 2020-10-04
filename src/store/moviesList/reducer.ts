import {IMoviesItem} from "@components/search-results/movies-list/IMoviesItem";
import {
    GET_MOVIES_LIST,
    MoviesListActionTypes,
    UPDATE_FILTER_QUERY,
    UPDATE_SEARCH_QUERY,
    UPDATE_SORT_BY_QUERY
} from "./types";
import {SortOptions} from "@components/movies-navigation/sort-switcher/SortOptions";
import {FilterOptions} from "@components/movies-navigation/genre-filter/FilterOptions";
import Utils from "../../components/Utils";

export interface IMoviesListState {
    movies: IMoviesItem[];
    limit: number;
    offset: number;
    totalAmount: number;
    sortBy: string;
    filter: string;
    search: string;
}

const initialState: IMoviesListState = {
    movies: [],
    limit: 15,
    offset: 0,
    totalAmount: 0,
    filter: FilterOptions.ALL,
    sortBy: SortOptions.RELEASE_DATE,
    search: ''
}

export const moviesListReducer =
    (state: IMoviesListState = initialState, action: MoviesListActionTypes): IMoviesListState => {
    switch (action.type) {
        case GET_MOVIES_LIST: {
            return {
                ...state,
                movies: action.payload.data.map(Utils.parseMoviesServerItem),
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
