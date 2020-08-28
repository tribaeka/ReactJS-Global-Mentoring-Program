import { CLOSE_MOVIE_POPUP, MoviePopupsActionTypes, OPEN_MOVIE_POPUP } from "./types";
import { IMoviesItem } from "../../components/home/main/search-results/movies-list/IMoviesItem";

export function openPopup(name: string, title: string, movie?: IMoviesItem): MoviePopupsActionTypes {
    return {
        type: OPEN_MOVIE_POPUP,
        payload: { name: name, title: title, movie: movie }
    }
}

export function closePopup(): MoviePopupsActionTypes {
    return { type: CLOSE_MOVIE_POPUP }
}