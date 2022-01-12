import React, {useEffect} from "react";

import {Wrapper} from './App.styles';
import Navbar from "./components/UI/Navbar/Navbar";
import RecommendedMovie from "./components/RecommendedMovie/RecommendedMovie";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {movieSlice} from "./store/reducers/movie/MovieSlice";
import {fetchAsyncMovies} from "./store/reducers/movie/MovieActionCreators";

const App = () => {
  const dispatch = useAppDispatch();
  const {movies} = useAppSelector(state => state.movie);

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, []);

  console.log(movies)

  return(
  <Wrapper>
    <Navbar/>
    <RecommendedMovie/>
  </Wrapper>
  );
};

export default App;
