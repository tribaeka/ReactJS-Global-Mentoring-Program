import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import { moviePopupsReducer } from "./moviePopups/reducers";
import createSagaMiddleWare from 'redux-saga';
import {sagaWatcher} from "./sagas";

const saga = createSagaMiddleWare();
const rootReducer = combineReducers({
    popups: moviePopupsReducer
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, compose(
    applyMiddleware(
        saga
    )
));

saga.run(sagaWatcher)
