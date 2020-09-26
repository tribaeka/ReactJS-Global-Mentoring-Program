import {IMoviesItem} from "../../components/home/main/search-results/movies-list/IMoviesItem";
import {MovieDetailsActionTypes} from "./types";

export interface IMovieDetailsState {
    movie: IMoviesItem;
}

const initialState: IMovieDetailsState = {
    movie: undefined
}

export const movieDetailsReducer =
    (state: IMovieDetailsState = initialState, action: MovieDetailsActionTypes): IMovieDetailsState => {
        switch (action.type) {
            case "SET_MOVIE": {
                return {
                    movie: action.payload.movie
                }
            }
            case "CLEAR_MOVIE": {
                return {
                    movie: undefined
                }
            }
            default:
                return state;
        }

    }