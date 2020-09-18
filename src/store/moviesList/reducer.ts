import {mapKeys, camelCase} from 'lodash';
import {IMoviesItem} from "../../components/home/main/search-results/movies-list/IMoviesItem";
import {GET_MOVIES_LIST, MoviesListActionTypes} from "./types";
import {SortOptions} from "../../components/home/main/movies-navigation/sort-switcher/SortOptions";

export interface MoviesListState {
    movies: IMoviesItem[],
    limit: number,
    offset: number,
    totalAmount: number;
    sortBy: string,
    filter?: string[]
}

const initialState = {
    movies: [],
    limit: 12,
    offset: 0,
    totalAmount: 0,
    sortBy: SortOptions.RELEASE_DATE
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
        case "UPDATE_SORT_BY": {
            return {
                ...state,
                sortBy: action.payload.sortBy
            }
        }
        default:
            return state;
    }

}