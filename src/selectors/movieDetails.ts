import {RootState} from "@store/index";
import {createSelector} from "reselect";
import {IMoviesItem} from "@components/search-results/movies-list/IMoviesItem";
import {IMovieDetailsState} from "@store/movieDetails/reducer";

export const baseMovieDetailsState = (state: RootState): IMovieDetailsState => state.movieDetails;
export const getMovie = createSelector<any, any, IMoviesItem>(
    [baseMovieDetailsState],
    (state: IMovieDetailsState) => state.movie
);
