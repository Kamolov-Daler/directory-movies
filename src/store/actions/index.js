// movies
export const CHANGE_LOADER = "CHANGE_LOADER";
export const CHANGE_MOVIES = "CHANGE_MOVIES";
export const INC_PAGE = "INC_PAGE";
export const GET_STATUS = "GET_STATUS";
export const CLEAR_LIST = "CLEAR_LIST";
export const SET_MAX_PAGE = "SET_MAX_PAGE";
export const SET_PAGE = "SET_PAGE";
export const CLEAR_SEARCH_LIST = "CLEAR_SEARCH_LIST";
export const CHANGE_SEARCH_LIST = "CHANGE_SEARCH_LIST";
export const ADD_SEARCH_LIST = "ADD_SEARCH_LIST";
export const CHANGE_STATUS = "CHANGE_STATUS"; 
export const CHANGE_PAGINATION = "CHANGE_PAGINATION";

// search-movies
export const CHANGE_NAME = "CHANGE_NAME";

export const changeLoader = (bool) => {
  return {
    type: CHANGE_LOADER,
    payload: bool,
  };
};

export const changeMovies = (data) => {
  return {
    type: CHANGE_MOVIES,
    payload: data,
  };
};

export const getStatus = (bool) => {
  return {
    type: GET_STATUS,
    payload: bool,
  };
};

export const changeSearchName = (name) => {
  return {
    type: CHANGE_NAME,
    payload: name,
  };
};

export const clearList = () => {
  return {
    type: CLEAR_LIST,
    payload: {},
  };
};

//pages
export const incPage = () => {
  return {
    type: INC_PAGE,
    payload: {},
  };
};

export const setMaxPage = (number) => {
  return {
    type: SET_MAX_PAGE,
    payload: number,
  };
};

export const setPage = (number) => {
  return {
    type: SET_PAGE,
    payload: number,
  };
};

export const clearSearchList = () => {
  return {
    type: CLEAR_SEARCH_LIST,
    payload: {},
  };
};

export const changeSearchList = (data) => {
  return {
    type: CHANGE_SEARCH_LIST,
    payload: data
  }
}

export const addSearchList = (data) => {
  return {
    type: ADD_SEARCH_LIST,
    payload: data,
  }
}

export const changeStatus = (bool) => {
  return {
    type: CHANGE_STATUS,
    payload: bool,
  }
}

export const changePagination = (bool) => {
  return {
    type: CHANGE_PAGINATION,
    payload: bool
  }
}


export const getMovies = (page = 1) => {
  return async function (dispatch) {
    dispatch(changeLoader(true));
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=f34afb54d9ab14f0bf9d905dc6836800&language=en-US&page=${page}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const responseJson = await response.json();
      dispatch(changeMovies(responseJson));
      setTimeout(() => {
        dispatch(changeLoader(false));
      }, 1000);
      return;
    } catch (e) {
      dispatch(changeLoader(false));
      console.log(e);
      return;
    }
  };
};

export const getSearchMovies = (page, searchName, pagination, max_page) => {
  return async function (dispatch) {
    try {
      if (!pagination) {
          dispatch(clearSearchList())
          dispatch(changeLoader(true));
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=f34afb54d9ab14f0bf9d905dc6836800&language=en-US&query=${searchName}&page=${1}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const responseJson = await response.json()
          dispatch(changeSearchList(responseJson.results))
          dispatch(setMaxPage(responseJson.total_pages))
          dispatch(changePagination(true))
          dispatch(changeLoader(false))
          return
        }
        if (pagination && max_page >= page) {
          dispatch(changeLoader(true));
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=f34afb54d9ab14f0bf9d905dc6836800&language=en-US&query=${searchName}&page=${page}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const responseJson = await response.json()
          dispatch(addSearchList(responseJson.results))
          dispatch(changeLoader(false));
          return
        }
      }
      catch(e) {
        console.log(e)
      }
  };
};
