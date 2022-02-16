import React, {useEffect} from "react";

import {useAppDispatch} from "./hooks/redux";
import {onAuthStateChanged} from "firebase/auth";
import {setUser} from "./store/reducers/user/userSlice";
import {auth} from "./common/firebase/firebase-config";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/UI/ScrollToTopButton/ScrollToTopButton";
import AppRouter from "./components/AppRouter/AppRouter";

import {Wrapper} from './styles/App.styles';

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
          <AppRouter/>
        </div>
      </div>
      <Footer/>
      <ScrollToTopButton/>
    </Wrapper>
  );
};

export default App;
