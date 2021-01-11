export const CHANGE_LOADER = "CHANGE_LOADER";
export const CHANGE_MOVIES = "CHANGE_MOVIES";
export const INC_PAGE = "INC_PAGE";

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

export const incPage = () => {
  return {
    type: INC_PAGE,
    payload: {},
  };
};

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
      dispatch(changeMovies(responseJson.results));
      setTimeout(() => {
        dispatch(changeLoader(false));
      }, 1000);
      return;
    } catch (e) {
      dispatch(changeLoader(true));
      console.log(e);
      return;
    }
  };
};
