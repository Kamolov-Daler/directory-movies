import { CHANGE_LOADER, CHANGE_MOVIES, INC_PAGE } from "../actions";

const initialData = {
  loading: false,
  movies: [],
  page: 1,
  fetching: false,
};

const moviesReducer = (state = initialData, action) => {
  switch (action.type) {
    case CHANGE_MOVIES:
      return { ...state, movies: state.movies.concat(action.payload) };
    case CHANGE_LOADER:
      return { ...state, loading: action.payload };
    case INC_PAGE:
      return {...state, page: state.page + 1}
    default:
      return state;
  }
};
export default moviesReducer;
