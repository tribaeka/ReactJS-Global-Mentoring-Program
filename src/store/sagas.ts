import {takeEvery, put, call} from 'redux-saga/effects'
import {GET_MOVIES_LIST, REQUEST_GET_MOVIES_LIST} from "./moviesList/types";

export function* sagaWatcher() {
    yield takeEvery(REQUEST_GET_MOVIES_LIST, sagaWorker)
}

function* sagaWorker() {
    const payload = yield call(fetchMovies);
    yield put({type: GET_MOVIES_LIST, payload: payload})
}

async function fetchMovies() {
    const response = await fetch('http://localhost:4000/movies?limit=10');
    return await response.json();
}