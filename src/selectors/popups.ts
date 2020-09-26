import {RootState} from "../store";
import {IMoviePopupsState} from "../store/moviePopups/reducer";
import {createSelector} from "reselect";
import {IMoviesItem} from "../components/home/main/search-results/movies-list/IMoviesItem";

export const basePopupsState = (state: RootState): IMoviePopupsState => state.popups;
export const isPopupOpened = createSelector<any, any, boolean>(
    [basePopupsState],
    (state: IMoviePopupsState) => state.isPopupOpened
);
export const getPopupName = createSelector<any, any, string>(
    [basePopupsState],
    (state: IMoviePopupsState) => state.popupName
);
export const getPopupTitle = createSelector<any, any, string>(
    [basePopupsState],
    (state: IMoviePopupsState) => state.popupTitle
);
export const getPopupMovie = createSelector<any, any, IMoviesItem>(
    [basePopupsState],
    (state: IMoviePopupsState) => state.movie
);