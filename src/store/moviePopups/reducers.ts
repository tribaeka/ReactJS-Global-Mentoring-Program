import { IMoviesItem } from '../../components/home/main/search-results/movies-list/IMoviesItem';
import { MoviePopupsActionTypes } from "./types";

export interface IMoviePopupsState {
    isPopupOpened: boolean;
    popupName?: string;
    popupTitle?: string;
    movie?: IMoviesItem;
}

const initialState = {
    isPopupOpened: false
}

export const moviePopupsReducer =
    (state: IMoviePopupsState = initialState, action: MoviePopupsActionTypes): IMoviePopupsState => {
        switch (action.type) {
            case 'OPEN_MOVIE_POPUP': {
                return {
                    ...state,
                    isPopupOpened: true,
                    popupName: action.payload.name,
                    popupTitle: action.payload.title,
                    movie: action.payload.movie
                }
            }
            case 'CLOSE_MOVIE_POPUP': {
                return {
                    ...state,
                    isPopupOpened: false,
                    popupName: undefined,
                    popupTitle: undefined,
                    movie: undefined
                }
            }
            default:
                return state;
        }
    }
