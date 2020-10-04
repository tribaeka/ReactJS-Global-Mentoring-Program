import {takeEvery, put, call, select} from 'redux-saga/effects'
import {GET_MOVIES_LIST, REQUEST_GET_MOVIES_LIST} from "./moviesList/types";
import {RootState} from "./index";
import {SagaIterator} from "@redux-saga/types";
import {getFilter, getLimit, getSearch, getSortBy} from "../selectors";
import {IRequestCreateMovieAction, REQUEST_CREATE_MOVIE, REQUEST_UPDATE_MOVIE} from "./moviePopups/types";
import {IMoviesServerItem} from "@components/search-results/movies-list/IMoviesItem";

export default function* rootSaga() {
    yield takeEvery(REQUEST_GET_MOVIES_LIST, getMoviesListWorker);
    yield takeEvery(REQUEST_CREATE_MOVIE, singleMovieWorker);
    yield takeEvery(REQUEST_UPDATE_MOVIE, singleMovieWorker);
}


function* getMoviesListWorker(): SagaIterator {
    const state: RootState = yield select();
    const outputPayload = yield call(fetchMovies, state);
    yield put({type: GET_MOVIES_LIST, payload: outputPayload})
}

function* singleMovieWorker(action: IRequestCreateMovieAction): SagaIterator {
    sendMovieRequest(action.payload.method, action.payload.movie);
}

async function fetchMovies(state: RootState) {
    const filter = getFilter(state);
    const response = await fetch(`${process.env.API_URL}`
        +`?${process.env.API_SEARCH_ATTR_NAME}=${getSearch(state)}`
        +`&${process.env.API_LIMIT_ATTR_NAME}=${getLimit(state)}`
        +`&${process.env.API_SORT_BY_ATTR_NAME}=${getSortBy(state)}`
        +`&${process.env.API_SORT_ORDER_ATTR_NAME}=${process.env.API_SORT_ORDER_DEFAULT_VALUE}`
        +`${filter ? `&${process.env.API_FILTER_ATTR_NAME}=${filter}`: ''}`);

    return await response.json();
}

async function sendMovieRequest(method: string, movie: IMoviesServerItem) {
    const requestOptions = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie)
    };
    const response = await fetch(process.env.API_URL, requestOptions)
    return await response.json();
}
