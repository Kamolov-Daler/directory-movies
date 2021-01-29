import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changePagination, changeStatus, clearList, clearSearchList, getMovies, getSearchMovies, incPage, setMaxPage, setPage } from "../../store/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      maxWidth: 345,
    },
  },
  media: {
    height: 350,
  },
  cont: {
    paddingTop: 100,
  },
  items: {
    marginBottom: 50,
  },
  text: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
}));

const MoviesList = () => {
  const { movies, loading } = useSelector((state) => state.moviesReducer, shallowEqual);
  const { page,max_page } = useSelector((state) => state.totalReducer, shallowEqual) 
  const {searchName,searchList, searching, pagination} = useSelector((state) => state.searchReducer, shallowEqual);
  const dispatch = useDispatch();
  const classes = useStyles();

  window.onscroll = function () {
    var offset = window.pageYOffset || document.documentElement.scrollTop,
      windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      progress = Math.floor((offset / windowHeight) * 100);
    if (progress > 90 && !loading) {
      dispatch(incPage());
      return;
    }
  };

  const getMoviesList = () => {
   
    let moviesList = searching ? searchList : movies;

    return moviesList.map((item) => (
      <Grid className={classes.items} key={item.id} item xs={12} sm={12} md={6} lg={4} xl={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              title={item.email}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                {item.original_title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.last_name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ));
  };

  useEffect(() => {
    if (searchName === "") {
      dispatch(getMovies(page));
      dispatch(changeStatus(false));
      dispatch(clearSearchList());
    }
    if (searchName !== "") {
      dispatch(clearList());
      dispatch(changeStatus(true));
      dispatch(getSearchMovies(page,searchName,pagination,max_page))
    }
  }, [ page, searchName]);
    
  return (
    <Grid className={classes.cont} container direction="row" justify="space-between" alignItems="center">
      {getMoviesList()}
    </Grid>
  );
};

export default MoviesList;
