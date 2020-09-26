import {IMoviesServerItem} from "../../components/home/main/search-results/movies-list/IMoviesItem";

export const GET_MOVIES_LIST = 'GET_MOVIES_LIST';
export const REQUEST_GET_MOVIES_LIST = 'REQUEST_GET_MOVIES_LIST';
export const UPDATE_SORT_BY_QUERY = 'UPDATE_SORT_BY_QUERY';
export const UPDATE_FILTER_QUERY = 'UPDATE_FILTER_QUERY';
export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';


export interface IGetMoviesListPayload {
    data: IMoviesServerItem[];
    limit: number;
    offset: number;
    totalAmount: number;
}

export interface IUpdateSortByQueryPayload {
    sortBy: string;
}

export interface IUpdateFilterQueryPayload {
    filter: string;
}

export interface IUpdateSearchQueryPayload {
    search: string;
}

interface IGetMoviesListAction {
    type: typeof GET_MOVIES_LIST;
    payload: IGetMoviesListPayload;
}

interface IRequestGetMoviesListAction {
    type: typeof REQUEST_GET_MOVIES_LIST;
}

interface IUpdateSortByQueryAction {
    type: typeof UPDATE_SORT_BY_QUERY;
    payload: IUpdateSortByQueryPayload;
}

interface IUpdateFilterQueryAction {
    type: typeof UPDATE_FILTER_QUERY;
    payload: IUpdateFilterQueryPayload;
}

interface IUpdateSearchQueryAction {
    type: typeof UPDATE_SEARCH_QUERY;
    payload: IUpdateSearchQueryPayload;
}

export type MoviesListActionTypes = IGetMoviesListAction
    | IRequestGetMoviesListAction
    | IUpdateSortByQueryAction
    | IUpdateFilterQueryAction
    | IUpdateSearchQueryAction;