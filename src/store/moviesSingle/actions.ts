import {IMoviesItem} from "../../components/home/main/search-results/movies-list/IMoviesItem";
import {MoviesSingleActionTypes, REQUEST_UPDATE_MOVIES_SINGLE} from "./types";

export function updateMoviesList(movie: IMoviesItem): MoviesSingleActionTypes {
    return {
        type: REQUEST_UPDATE_MOVIES_SINGLE,
        payload: movie
    }
}