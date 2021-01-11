import { combineReducers } from "redux";
import moviesReducer from "./moviesList";

export const reducer = combineReducers({
    moviesReducer,
});
