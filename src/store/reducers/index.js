import { combineReducers } from "redux";
import moviesReducer from "./moviesList";
import searchMovieReducer from "./searchMovie";
import totalReducer from "./total";
export const reducer = combineReducers({
    moviesReducer,
    searchMovieReducer,
    totalReducer
});
