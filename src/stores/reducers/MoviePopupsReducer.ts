import { IMoviesItem } from '../../home/main/search-results/movies-list/IMoviesItem';

export interface IMoviePopupsState {
    isPopupOpened: boolean;
    popupName?: string;
    popupTitle?: string;
    movie?: IMoviesItem;
}

export interface IMoviePopupsPayload {
    name: string;
    title: string;
    movie?: IMoviesItem;
}

const initialState = {
    isPopupOpened: false
}

type Action = {type: string, payload: IMoviePopupsPayload}

export const moviePopupsReducer =
    (state: IMoviePopupsState = initialState, action: Action) => {
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
