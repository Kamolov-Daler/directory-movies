import { AppBar, IconButton, makeStyles, fade, Toolbar, Typography, InputBase } from "@material-ui/core";
import React from "react";
import moviesIcon from "../../assets/film-roll.svg";
import SearchIcon from "@material-ui/icons/Search";
import { changeSearchName, clearList, getSearchMovie, searching, searchMovie, setPage } from "../../store/actions";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header = () => {
  const {searchName} = useSelector((state) => state.searchMovieReducer, shallowEqual)
  const {page} = useSelector((state) => state.totalReducer, shallowEqual)
  const classes = useStyles();
  const dispatch = useDispatch();


  const handleForm = (e) => {
    e.preventDefault()
    dispatch(setPage(1));
    dispatch(getSearchMovie(searchName,page))
  }

  const handleChangeName = (e) => {
    if (e.target.value.trim() === '') {
      dispatch(searching(false));
      dispatch(clearList())
    }
    dispatch(changeSearchName(e.target.value))
  } 

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: "rgb(37,72,102)" }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={moviesIcon} alt="movie" width="38" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Directory Movies
          </Typography>
          <form onSubmit={handleForm}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                onChange={handleChangeName}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </form>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
