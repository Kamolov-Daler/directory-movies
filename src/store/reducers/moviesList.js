import { CHANGE_LOADER, CHANGE_MOVIES, CLEAR_LIST } from "../actions";

const initialData = {
  loading: false,
  movies: [],
  fetching: false,
};

const moviesReducer = (state = initialData, action) => {
  switch (action.type) {
    case CHANGE_MOVIES:
      return { ...state, movies: state.movies.concat(action.payload.results) };
    case CHANGE_LOADER:
      return { ...state, loading: action.payload };
    case CLEAR_LIST:
      return { ...state, movies: [] };
    default:
      return state;
  }
};
export default moviesReducer;
