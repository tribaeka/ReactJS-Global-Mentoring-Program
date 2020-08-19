import { createStore } from 'redux';
import { popupsReducer } from './reducers/PopupsReducer';

export const popupsStore = createStore(popupsReducer);
