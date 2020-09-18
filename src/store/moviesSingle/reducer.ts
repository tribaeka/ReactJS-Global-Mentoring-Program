import {mapKeys, camelCase} from 'lodash';
import {IMoviesItem} from "../../components/home/main/search-results/movies-list/IMoviesItem";

export interface MoviesListState {
    movies: IMoviesItem[],
    limit: number,
    offset: number,
    totalAmount: number;
}

const initialState = {
    movies: [],
    limit: 8,
    offset: 0,
    totalAmount: 0
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
        default:
            return state;
    }

}