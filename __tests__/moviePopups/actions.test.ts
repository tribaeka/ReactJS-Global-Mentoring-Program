import { closePopup, createMovie, openPopup, updateMovie } from "../../store/moviePopups/actions";
import {
    CLOSE_MOVIE_POPUP,
    MOVIE_POPUPS_MAP,
    OPEN_MOVIE_POPUP,
    REQUEST_CREATE_MOVIE, REQUEST_UPDATE_MOVIE
} from "../../store/moviePopups/types";
import { MOVIES_ITEM_MOCK, MOVIES_SERVICE_ITEM_MOCK } from "../../entities/moviesItem";

test('should create action to open popup', () => {
    const addMoviePopupName = 'ADD MOVIE';
    const editMoviePopupName = 'EDIT MOVIE';
    const expectedAddMoviePopupAction = {
        type: OPEN_MOVIE_POPUP,
        payload: { name: MOVIE_POPUPS_MAP.ADD, title: addMoviePopupName }
    };
    const expectedEditMoviePopupAction = {
        type: OPEN_MOVIE_POPUP,
        payload: { name: MOVIE_POPUPS_MAP.EDIT, title: editMoviePopupName, movie: MOVIES_ITEM_MOCK }
    };
    expect(openPopup(MOVIE_POPUPS_MAP.ADD, addMoviePopupName)).toEqual(expectedAddMoviePopupAction);
    expect(openPopup(MOVIE_POPUPS_MAP.EDIT, editMoviePopupName, MOVIES_ITEM_MOCK)).toEqual(expectedEditMoviePopupAction);
});

test('should create action to close popup', () =>
    expect(closePopup()).toEqual({ type: CLOSE_MOVIE_POPUP }));

test('should create request-action to create movie', () => {
    const expectedAction = {
        type: REQUEST_CREATE_MOVIE,
        payload: {
            method: 'POST',
            movie: MOVIES_SERVICE_ITEM_MOCK
        }
    };
    expect(createMovie(MOVIES_SERVICE_ITEM_MOCK)).toEqual(expectedAction);
});

test('should create request-action to update movie', () => {
    const expectedAction = {
        type: REQUEST_UPDATE_MOVIE,
        payload: {
            method: 'PUT',
            movie: MOVIES_SERVICE_ITEM_MOCK
        }
    };
    expect(updateMovie(MOVIES_SERVICE_ITEM_MOCK)).toEqual(expectedAction);
});
