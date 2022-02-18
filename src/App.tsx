import React, {useState} from "react";

import {useAppDispatch} from "./hooks/redux";
import {onAuthStateChanged} from "firebase/auth";
import {setFavoriteMovies, setUser, setWatchLaterMovies} from "./store/reducers/user/userSlice";
import {auth} from "./common/firebase/firebase-config";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/UI/ScrollToTopButton/ScrollToTopButton";
import AppRouter from "./components/AppRouter/AppRouter";

import {Wrapper} from './styles/App.styles';
import {getFavoriteMovies} from "./helpers/getFavoriteMovies";
import {getWatchLaterMovies} from "./helpers/getWatchLaterMovies";
import {GlobalStyles} from "./styles/globalStyles";
import {ThemeProvider} from "styled-components";

const defaultTheme = {
  primaryFontColor: 'white',
}

const lightTheme = {
  id: 'light',
  backgroundPageColor: '#8b9dc3',
  backgroundUIColor: '#6d8db9',
  secondaryFontColor: '#dcd4d4',
  footerFontColor: '#dcd4d4',
}

const darkTheme = {
  id: 'dark',
  backgroundPageColor: '#0B0C10',
  backgroundUIColor: '#1F2833',
  secondaryFontColor: '#747474',
  footerFontColor: '#747474',
}


const App = () => {
  const [theme, setTheme] = useState({...defaultTheme, ...lightTheme});
  const dispatch = useAppDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      dispatch(setUser(null));
      dispatch(setFavoriteMovies([]));
      dispatch(setWatchLaterMovies([]));
      return;
    }
    dispatch(setUser({uid: currentUser.uid}));
    getFavoriteMovies(currentUser, dispatch);
    getWatchLaterMovies(currentUser, dispatch);
  });

  const changeTheme = () => {
    if (theme.id === 'light') {
      setTheme({...defaultTheme, ...darkTheme})
    } else {
      setTheme({...defaultTheme, ...lightTheme})
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
