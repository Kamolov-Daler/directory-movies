import { Box, CircularProgress, Container } from "@material-ui/core";
import React, {useEffect} from "react";
import "./App.css";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import MoviesList from "./components/Movies/MoviesList";
import Header from "./components/Header/Header";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ruRU } from "@material-ui/core/locale";
import { getMovies, setMaxPage, setPage } from "./store/actions";

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: "rgb(80,113,146)",
        contrastText: "#fff",
      },

      secondary: {
        main: "#009688",
        contrastText: "#fff",
      },
      error: {
        main: "rgb(235,76,66)",
      },
    },
  },
  ruRU
);

const useStyles = makeStyles({
  root: {
    margin: "auto",
    padding: 0,
  },
});

function App() {
  const classes = useStyles();
  const { loading } = useSelector((state) => state.moviesReducer, shallowEqual);
  const {searching} =  useSelector((state) => state.searchReducer, shallowEqual)
  const dispatch = useDispatch()


  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth={false} className={`container ${classes.root}`}>
          <Header />
          <MoviesList />
          {loading && (
            <Box align={"center"} mt={3}>
              <CircularProgress color="secondary" />
            </Box>
          )}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
