import {applyMiddleware, combineReducers, createStore} from "redux";
import { moviePopupsReducer } from "./moviePopups/reducer";
import createSagaMiddleWare from 'redux-saga';
import rootSaga from "./sagas";
import {moviesListReducer} from "./moviesList/reducer";
import {composeWithDevTools} from "redux-devtools-extension/index";
import {movieDetailsReducer} from "./movieDetails/reducer";

const saga = createSagaMiddleWare();
const rootReducer = combineReducers({
    popups: moviePopupsReducer,
    moviesList: moviesListReducer,
    movieDetails: movieDetailsReducer
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools (
    applyMiddleware(
        saga
    )
));

saga.run(rootSaga)
