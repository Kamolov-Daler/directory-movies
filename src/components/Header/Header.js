import { AppBar, IconButton, makeStyles, fade, Toolbar, Typography, InputBase } from "@material-ui/core";
import React, {useEffect} from "react";
import moviesIcon from "../../assets/film-roll.svg";
import SearchIcon from "@material-ui/icons/Search";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { DebounceInput } from "react-debounce-input";
import {
  changePagination,
  changeSearchName,
  changeStatus,
  clearList,
  clearSearchList,
  getMovies,
  setMaxPage,
  setPage,
} from "../../store/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
  },
  searchInput: {
    position: "absolute",
    top: "3px",
    left: "7px",
  },
  title: {
    flexGrow: 1,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
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
  inputInput: {
    padding: "7px 30px",
    borderRadius: "3px",
    outline: "none",
    border: "1px solid rgba(95,95,96, 0.5)",
    background: "rgba(95,95,96, 0.5)",
    color: "white",
    width: "60%",
    [theme.breakpoints.up("sm")]: {
      padding: "7px 40px",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {searchName} = useSelector((state) => state.searchReducer, shallowEqual) 

  const handleChange = (e) => {
    dispatch(changeSearchName(e.target.value));
  };


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
          <div className={classes.search}>
            <div className={classes.searchInput}>
              <SearchIcon />
            </div>
            <DebounceInput minLength={2} debounceTimeout={1000} onChange={handleChange} className={classes.inputInput} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
