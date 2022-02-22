import React, {useEffect, useState} from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/UI/ScrollToTopButton/ScrollToTopButton";
import AppRouter from "./components/AppRouter/AppRouter";
import {ThemeProvider} from "styled-components";

import {useAppDispatch} from "./hooks/redux";
import {onAuthStateChanged} from "firebase/auth";
import {setFavoriteMovies, setUser, setWatchLaterMovies} from "./store/reducers/user/userSlice";
import {getFavoriteMovies, getWatchLaterMovies} from "./common/firebase/database";
import {auth} from "./common/firebase/firebase-config";

import {Wrapper} from './styles/App.styles';
import {GlobalStyles} from "./styles/globalStyles";
import {darkTheme, defaultTheme, lightTheme} from "./styles/themes/themes";

import {IUser} from "./types/IUser";

const App = () => {
  const [theme, setTheme] = useState({...defaultTheme, ...darkTheme});
  const dispatch = useAppDispatch();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      setTheme({...defaultTheme, ...lightTheme})
    }
  }, []);

  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      dispatch(setUser(null));
      dispatch(setFavoriteMovies([]));
      dispatch(setWatchLaterMovies([]));
      return;
    }

    const user: IUser = {
      uid: currentUser.uid,
      displayName: currentUser.displayName || 'unknown',
      photoURL: currentUser.photoURL || ''
    };
    dispatch(setUser(user));
    getFavoriteMovies(currentUser, dispatch);
    getWatchLaterMovies(currentUser, dispatch);
  });

  const changeTheme = () => {
    if (theme.id === 'light') {
      setTheme({...defaultTheme, ...darkTheme});
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme({...defaultTheme, ...lightTheme});
      localStorage.setItem('theme', 'light');
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles backgroundColor={theme.backgroundPageColor} color={theme.primaryFontColor}/>
      <Wrapper>
        <div className='container'>
          <div className='colons'>
            <Navbar changeTheme={changeTheme} isDark={theme.id === 'dark'}/>
            <div className='content'>
              <AppRouter/>
            </div>
          </div>
          <Footer/>
          <ScrollToTopButton/>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
