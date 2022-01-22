import React from "react";

import {useAppDispatch} from "./hooks/redux";

import Navbar from "./components/Navbar/Navbar";
import {Main, Search, Favorite, WatchLater, User, Movie, PageNotFound} from './pages'
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/UI/ScrollToTopButton/ScrollToTopButton";
import {Route, Routes} from "react-router-dom";

import {Wrapper} from './styles/App.styles';
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./common/firebase/firebase-config";
import {setUser} from "./store/reducers/user/userSlice";

const App = () => {
  const dispatch = useAppDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      dispatch(setUser(null));
      return;
    }
    dispatch(setUser({uid: currentUser.uid}));
  });

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
            <Route path='movie/:id' element={<Movie/>}/>
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
