import { createStore } from 'redux';
import { moviePopupsReducer } from './reducers/MoviePopupsReducer';

export const moviePopupsStore = createStore(moviePopupsReducer);
