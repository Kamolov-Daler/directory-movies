export const CHANGE_LOADER = "CHANGE_LOADER";
export const CHANGE_MOVIES = "CHANGE_MOVIES";
export const INC_PAGE = "INC_PAGE";
export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const SEARCHING = "SEARCHING";
export const GET_STATUS = "GET_STATUS";
export const CHANGE_NAME = 'CHANGE_NAME';
export const CLEAR_LIST = 'CLEAR_LIST'; 
export const SET_PAGE = 'SET_PAGE'; 

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


export const searchMovie = (data) => {
  return {
    type: SEARCH_MOVIE,
    payload: data,
  };
};

export const searching = (bool) => {
  return {
    type: SEARCHING,
    payload: bool,
  };
};

export const getStatus = (bool) => {
  return {
    type: GET_STATUS,
    payload: bool
  }
}

export const changeSearchName = (name) => {
  return {
    type: CHANGE_NAME,
    payload: name,
  }
}

export const clearList = () => {
  return {
    type: CLEAR_LIST,
    payload: [],
  }
}

//pages
export const incPage = () => {
  return {
    type: INC_PAGE,
    payload: {},
  };
};

export const setPage = (number) => {
  return {
    type: SET_PAGE,
    payload: number,
  }
}



export const getMovies = (page) => {
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

export const getSearchMovie = (name,page) => {
  return async function (dispatch) {
    if (name.trim()) {
      dispatch(searching(true));
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=f34afb54d9ab14f0bf9d905dc6836800&language=en-US&query=${name}&page=${page}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const responseJson = await response.json();
        dispatch(searchMovie(responseJson.results))
        return;
      } catch (e) {
        dispatch(getStatus(true));
        console.log(e);
        return;
      }
    }
  };
};
