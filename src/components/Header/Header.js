import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import moviesIcon from "../../assets/film-roll.svg";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

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
          {/* <Button type="search" color="inherit">
            Login
          </Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
