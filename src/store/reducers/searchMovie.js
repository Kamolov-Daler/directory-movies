import { CHANGE_NAME, CLEAR_LIST, GET_STATUS, SEARCHING, SEARCH_MOVIE } from "../actions";

const initialData = {
  searching: false,
  searchList: [],
  searchName: "",
  error: false,
};

const searchMovieReducer = (state = initialData, action) => {
  switch (action.type) {
    case SEARCHING:
      return { ...state, searching: action.payload };
    case SEARCH_MOVIE:
      return { ...state, searchList: state.searchList.concat(action.payload) };
    case GET_STATUS:
      return { ...state, error: action.payload };
    case CHANGE_NAME:
      return { ...state, searchName: action.payload };
    case CLEAR_LIST:
      return { ...state, searchList: action.payload };
    default:
      return state;
  }
};

export default searchMovieReducer;
