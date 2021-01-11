import { INC_PAGE, SET_PAGE } from "../actions";

const initialData = {
  page: 1,
  max_page: 1,
};

const totalReducer = (state = initialData, action) => {
  switch (action.type) {
    case INC_PAGE:
      return { ...state, page: state.page + 1 };
    case SET_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export default totalReducer;
