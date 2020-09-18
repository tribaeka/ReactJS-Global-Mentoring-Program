import {IMoviesItem} from "../../components/home/main/search-results/movies-list/IMoviesItem";

export const UPDATE_MOVIES_SINGLE = 'UPDATE_MOVIES_SINGLE';
export const REQUEST_UPDATE_MOVIES_SINGLE = 'REQUEST_UPDATE_MOVIES_SINGLE';



interface IUpdateMoviesSingleAction {
    type: typeof UPDATE_MOVIES_SINGLE;
    payload: IMoviesItem;
}

interface IRequestUpdateMoviesSingleAction {
    type: typeof REQUEST_UPDATE_MOVIES_SINGLE;
    payload?: IMoviesItem
}

export type MoviesSingleActionTypes = IUpdateMoviesSingleAction | IRequestUpdateMoviesSingleAction;