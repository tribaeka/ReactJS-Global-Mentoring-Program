import {IMoviesItem} from "../../components/home/main/search-results/movies-list/IMoviesItem";

export const GET_MOVIES_LIST = 'GET_MOVIES_LIST';
export const REQUEST_GET_MOVIES_LIST = 'REQUEST_GET_MOVIES_LIST';



export interface IGetMoviesListPayload{
    data: IMoviesItem[];
    limit: number;
    offset: number;
    totalAmount: number;
}

interface IRequestMoviesListPayload {
    limit: number
}

interface IGetMoviesListAction {
    type: typeof GET_MOVIES_LIST;
    payload: IGetMoviesListPayload;
}

interface IRequestGetMoviesListAction {
    type: typeof REQUEST_GET_MOVIES_LIST;
    payload?: IRequestMoviesListPayload
}

export type MoviesListActionTypes = IGetMoviesListAction | IRequestGetMoviesListAction;