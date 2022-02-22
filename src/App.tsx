import React, {useEffect, useState} from "react";

import {useAppDispatch} from "./hooks/redux";
import {onAuthStateChanged} from "firebase/auth";
import {setFavoriteMovies, setUser, setWatchLaterMovies} from "./store/reducers/user/userSlice";
import {auth} from "./common/firebase/firebase-config";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/UI/ScrollToTopButton/ScrollToTopButton";
import AppRouter from "./components/AppRouter/AppRouter";

import {Wrapper} from './styles/App.styles';
import {GlobalStyles} from "./styles/globalStyles";
import {ThemeProvider} from "styled-components";
import {getFavoriteMovies, getWatchLaterMovies} from "./common/firebase/database";

const defaultTheme = {
  primaryFontColor: 'white',
  red: '#ff2020',
}

const lightTheme = {
  id: 'light',
  backgroundPageColor: '#8b9dc3',
  backgroundUIColor: '#6d8db9',
  backgroundMainPart: '#95a5c7',
  secondaryFontColor: '#dcd4d4',
  footerFontColor: '#dcd4d4',
}

const darkTheme = {
  id: 'dark',
  backgroundPageColor: '#0B0C10',
  backgroundUIColor: '#1F2833',
  backgroundMainPart: '#272936',
  secondaryFontColor: '#747474',
  footerFontColor: '#747474',
}


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
    dispatch(setUser({uid: currentUser.uid, displayName: currentUser.displayName || 'unknown', photoURL: currentUser.photoURL || ''}));
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
