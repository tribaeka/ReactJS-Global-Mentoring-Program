import {IMoviesItem} from '@components/search-results/movies-list/IMoviesItem';
import {CLOSE_MOVIE_POPUP, MoviePopupsActionTypes, OPEN_MOVIE_POPUP} from "./types";

export interface IMoviePopupsState {
    isPopupOpened: boolean;
    popupName?: string;
    popupTitle?: string;
    movie?: IMoviesItem;
}

const initialState: IMoviePopupsState = {
    isPopupOpened: false
};

export const moviePopupsReducer =
    (state: IMoviePopupsState = initialState, action: MoviePopupsActionTypes): IMoviePopupsState => {
        switch (action.type) {
            case OPEN_MOVIE_POPUP: {
                return {
                    ...state,
                    isPopupOpened: true,
                    popupName: action.payload.name,
                    popupTitle: action.payload.title,
                    movie: action.payload.movie
                }
            }
            case CLOSE_MOVIE_POPUP: {
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
    };
