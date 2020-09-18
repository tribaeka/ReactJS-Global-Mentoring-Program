import {IMoviesItem} from "../../components/home/main/search-results/movies-list/IMoviesItem";
import {SortOptions} from "../../components/home/main/movies-navigation/sort-switcher/SortOptions";

export const GET_MOVIES_LIST = 'GET_MOVIES_LIST';
export const REQUEST_GET_MOVIES_LIST = 'REQUEST_GET_MOVIES_LIST';
export const UPDATE_SORT_BY = 'UPDATE_SORT_BY';


export interface IGetMoviesListPayload {
    data: IMoviesItem[];
    limit: number;
    offset: number;
    totalAmount: number;
}

export interface IUpdateSortByPayload {
    sortBy: string;
}

interface IGetMoviesListAction {
    type: typeof GET_MOVIES_LIST;
    payload: IGetMoviesListPayload;
}

interface IRequestGetMoviesListAction {
    type: typeof REQUEST_GET_MOVIES_LIST;
}

interface IUpdateSortByAction {
    type: typeof UPDATE_SORT_BY,
    payload: IUpdateSortByPayload
}

export type MoviesListActionTypes = IGetMoviesListAction
    | IRequestGetMoviesListAction
    | IUpdateSortByAction;