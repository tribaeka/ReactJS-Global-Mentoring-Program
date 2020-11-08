import Utils from "../components/Utils";
import { MOVIES_ITEM_MOCK, MOVIES_LIST_MOCK, MOVIES_SERVICE_ITEM_MOCK } from "../entities/moviesItem";

test('it tests getReleaseYear8 method', () => {
    const moviesItemReleaseYear = 1925;
    expect(Utils.getReleaseYear(MOVIES_ITEM_MOCK.releaseDate)).toEqual(moviesItemReleaseYear);
    expect(Utils.getReleaseYear(undefined)).toBeDefined();
});

test('it tests genresToString method', () => {
    expect(Utils.genresToString(MOVIES_SERVICE_ITEM_MOCK.genres)).toEqual(MOVIES_ITEM_MOCK.genres);
    expect(Utils.genresToString(undefined)).toBeDefined();
});

test('it tests genresToArray method', () => {
    expect(Utils.genresToArray(MOVIES_ITEM_MOCK.genres)).toEqual(MOVIES_SERVICE_ITEM_MOCK.genres);
    expect(Utils.genresToArray(undefined)).toBeDefined();
});

test('it tests parseMoviesServerItem method', () =>
    expect(Utils.parseMoviesServerItem(MOVIES_SERVICE_ITEM_MOCK)).toEqual(MOVIES_ITEM_MOCK));

test('it tests parseMoviesItem method', () =>
    expect(Utils.parseMoviesItem(MOVIES_ITEM_MOCK)).toEqual(MOVIES_SERVICE_ITEM_MOCK));

test('it tests getMovieById method', () =>
    expect(Utils.getMovieById(MOVIES_LIST_MOCK, MOVIES_ITEM_MOCK.id.toString())).toEqual(MOVIES_ITEM_MOCK));
