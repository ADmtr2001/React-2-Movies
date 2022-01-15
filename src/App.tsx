import React, {useEffect} from "react";

import {useAppDispatch} from "./hooks/redux";
import {fetchAsyncMovies, fetchAsyncRecommended, fetchAsyncShows} from "./store/reducers/movie/MovieActionCreators";

import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/UI/ScrollToTopButton/ScrollToTopButton";
import {Route, Routes} from "react-router-dom";

import {Wrapper} from './styles/App.styles';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
    dispatch(fetchAsyncRecommended());
  }, []);

  return (
    <Wrapper>
      <div className='colons'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </div>
      <Footer/>
      <ScrollToTopButton/>
    </Wrapper>
  );
};

export default App;
