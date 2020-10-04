import {RootState} from "@store/index";
import {IMoviesListState} from "@store/moviesList/reducer";
import {createSelector} from "reselect";
import {IMoviesItem} from "@components/search-results/movies-list/IMoviesItem";

export const baseMoviesState = (state: RootState): IMoviesListState => state.moviesList;
export const getMovies = createSelector<any, any, IMoviesItem[]>(
    [baseMoviesState],
    (state: IMoviesListState) => state.movies
);
export const getSortBy = createSelector<any, any, string>(
    [baseMoviesState],
    (state: IMoviesListState) => state.sortBy
);
export const getFilter = createSelector<any, any, string>(
    [baseMoviesState],
    (state: IMoviesListState) => state.filter
);
export const getSearch = createSelector<any, any, string>(
    [baseMoviesState],
    (state: IMoviesListState) => state.search
);
export const getTotalAmount = createSelector<any, any, number>(
    [baseMoviesState],
    (state: IMoviesListState) => state.totalAmount
);
export const getLimit = createSelector<any, any, number>(
    [baseMoviesState],
    (state: IMoviesListState) => state.limit
);
