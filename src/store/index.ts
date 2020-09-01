import { createStore } from "redux";
import { moviePopupsReducer } from "./moviePopups/reducers";

export const moviePopupsStore = createStore(moviePopupsReducer);
