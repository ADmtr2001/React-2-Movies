import React, {useEffect} from "react";

import {Wrapper} from './App.styles';
import Navbar from "./components/UI/Navbar/Navbar";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchAsyncMovies, fetchAsyncRecommended, fetchAsyncShows} from "./store/reducers/movie/MovieActionCreators";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";

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
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </Wrapper>
  );
};

export default App;
