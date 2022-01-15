import React, {useEffect} from "react";

import {useAppDispatch} from "./hooks/redux";
import {fetchAsyncMovies, fetchAsyncRecommended, fetchAsyncShows} from "./store/reducers/movie/MovieActionCreators";

import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import Search from "./pages/Search/Search";
import Favorite from "./pages/Favorite/Favorite";
import WatchLater from "./pages/WatchLater/WatchLater";
import User from './pages/User/User';
import PageNotFound from "./pages/PageNotFound/PageNotFound";
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
        <div className='content'>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='favorite' element={<Favorite/>}/>
            <Route path='watch-later' element={<WatchLater/>}/>
            <Route path='user' element={<User/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
        </div>
      </div>
      <Footer/>
      <ScrollToTopButton/>
    </Wrapper>
  );
};

export default App;
