export default class Utils {
    static getReleaseYear(releaseDate: string): number | string {
        return releaseDate ? new Date(releaseDate).getFullYear() : '';
    }

    static genresToString(genres: string[]): string {
        return genres ? genres.join(', ') : '';
    }
}