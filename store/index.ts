import {applyMiddleware, combineReducers, createStore} from "redux";
import { moviePopupsReducer } from "./moviePopups/reducer";
import createSagaMiddleWare from 'redux-saga';
import rootSaga from "./sagas";
import {moviesListReducer} from "./moviesList/reducer";
import {composeWithDevTools} from "redux-devtools-extension/index";
import {createWrapper} from 'next-redux-wrapper';


const rootReducer = combineReducers({
    popups: moviePopupsReducer,
    moviesList: moviesListReducer
});
export type RootState = ReturnType<typeof rootReducer>;

const makeStore = context => {
    const sagaMiddleware  = createSagaMiddleWare();
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware)
    ));

    (store as any).sagaTask = sagaMiddleware.run(rootSaga)

    return store;
}

const wrapper = createWrapper(makeStore);

export default wrapper;
