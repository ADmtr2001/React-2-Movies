import React, {useEffect} from "react";

import {Wrapper} from './App.styles';
import Navbar from "./components/UI/Navbar/Navbar";
import RecommendedMovie from "./components/RecommendedMovie/RecommendedMovie";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {movieSlice} from "./store/reducers/movie/MovieSlice";
import {fetchAsyncMovies, fetchAsyncRecommended, fetchAsyncShows} from "./store/reducers/movie/MovieActionCreators";
import Home from "./components/Home/Home";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
    dispatch(fetchAsyncRecommended());
  }, []);

  return (
    <Wrapper>
      <Navbar/>
      <RecommendedMovie/>
      <Home/>
    </Wrapper>
  );
};

export default App;
