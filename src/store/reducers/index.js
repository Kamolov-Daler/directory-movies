import { combineReducers } from "redux";
import moviesReducer from "./moviesList";
import searchReducer from "./searchList";
import totalReducer from "./total";

export const reducer = combineReducers({
    moviesReducer,
    searchReducer,
    totalReducer
});
