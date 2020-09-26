import {RootState} from "../store";
import {IMoviesListState} from "../store/moviesList/reducer";
import {createSelector} from "reselect";
import {IMoviesItem} from "../components/home/main/search-results/movies-list/IMoviesItem";

export const baseMoviesState = (state: RootState): IMoviesListState => state.movies;
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