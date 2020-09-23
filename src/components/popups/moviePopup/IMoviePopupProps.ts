import { IMoviesItem } from '@components/home/main/search-results/movies-list/IMoviesItem';
import {closePopup} from "../../../store/moviePopups/actions";

export interface IMoviePopupProps {
    title: string;
    movie?: IMoviesItem;
    closePopup?: typeof closePopup;
}
