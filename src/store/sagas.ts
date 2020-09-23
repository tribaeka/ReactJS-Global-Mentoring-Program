import {takeEvery, put, call, select} from 'redux-saga/effects'
import {GET_MOVIES_LIST, REQUEST_GET_MOVIES_LIST} from "./moviesList/types";
import {MoviesListState} from "./moviesList/reducer";
import {RootState} from "./index";
import {SagaIterator} from "@redux-saga/types";

export default function* rootSaga() {
    yield takeEvery(REQUEST_GET_MOVIES_LIST, getMoviesListWorker);
}


function* getMoviesListWorker(): SagaIterator {
    const state: RootState = yield select();
    const outputPayload = yield call(fetchMovies, state.movies);
    yield put({type: GET_MOVIES_LIST, payload: outputPayload})
}

async function fetchMovies(moviesListState: MoviesListState) {
    const response = await fetch(`${process.env.API_URL}`
        +`?${process.env.API_SEARCH_ATTR_NAME}=${moviesListState.search}`
        +`&${process.env.API_LIMIT_ATTR_NAME}=${moviesListState.limit}`
        +`&${process.env.API_SORT_BY_ATTR_NAME}=${moviesListState.sortBy}`
        +`${moviesListState.filter ? `&${process.env.API_FILTER_ATTR_NAME}=${moviesListState.filter}`: ''}`);

    return await response.json();
}