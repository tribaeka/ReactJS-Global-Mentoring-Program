import {IMoviesItem, IMoviesServerItem} from "@components/search-results/movies-list/IMoviesItem";
import {camelCase, mapKeys, snakeCase} from 'lodash';

export default class Utils {
    static getReleaseYear(releaseDate: string): number | string {
        return releaseDate ? new Date(releaseDate).getFullYear() : '';
    }

    static genresToString(genres: string[]): string {
        return genres ? genres.join(', ') : '';
    }

    static genresToArray(genres: string): string[] {
        return genres === '' ? [] : genres.split(',').map(genre => genre.trim());
    }

    static parseMoviesServerItem(movie: IMoviesServerItem): IMoviesItem {
        return {
            ...mapKeys(movie, (value, key) => camelCase(key)),
            genres: Utils.genresToString(movie.genres)
        }
    }

    static parseMoviesItem(movie: IMoviesItem): IMoviesServerItem {
        return {
            ...mapKeys(movie, (value, key) => snakeCase(key)),
            runtime: Number(movie.runtime),
            genres: Utils.genresToArray(movie.genres)
        }
    }
}
