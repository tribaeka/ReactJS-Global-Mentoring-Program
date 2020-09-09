import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import { moviePopupsReducer } from "./moviePopups/reducer";
import createSagaMiddleWare from 'redux-saga';
import {sagaWatcher} from "./sagas";
import {moviesListReducer} from "./moviesList/reducer";

const saga = createSagaMiddleWare();
const rootReducer = combineReducers({
    popups: moviePopupsReducer,
    movies: moviesListReducer
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, compose(
    applyMiddleware(
        saga
    )
));

saga.run(sagaWatcher)
