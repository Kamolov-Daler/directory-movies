import {
  ADD_SEARCH_LIST,
  CHANGE_NAME,
  CHANGE_PAGINATION,
  CHANGE_SEARCH_LIST,
  CHANGE_STATUS,
  CLEAR_SEARCH_LIST,
} from "../actions";

const initialData = {
  searchName: "",
  searchList: [],
  searching: false,
  pagination: false,
};

const searchReducer = (state = initialData, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, searchName: action.payload };
    case CLEAR_SEARCH_LIST:
      return { ...state, searchList: [] };
    case CHANGE_SEARCH_LIST:
      return { ...state, searchList: action.payload };
    case ADD_SEARCH_LIST:
      return { ...state, searchList: state.searchList.concat(action.payload) };
    case CHANGE_STATUS:
      return { ...state, searching: action.payload };
    case CHANGE_PAGINATION:
      return { ...state, pagination: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
