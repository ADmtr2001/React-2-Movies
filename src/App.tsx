import React, {useEffect} from "react";

import {Wrapper} from './styles/App.styles';
import Navbar from "./components/Navbar/Navbar";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchAsyncMovies, fetchAsyncRecommended, fetchAsyncShows} from "./store/reducers/movie/MovieActionCreators";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";

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
    </Wrapper>
  );
};

export default App;
