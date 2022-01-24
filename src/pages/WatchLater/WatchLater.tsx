import React, {useEffect} from 'react';

import {Wrapper} from "./WatchLater.styles";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {CategoryType, getDocument} from "../../common/firebase/database";
import {setWatchLaterMovies} from "../../store/reducers/user/userSlice";
import MovieList from "../../components/MovieList/MovieList";

const WatchLater = () => {
  const {user, watchLaterMovies} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (!user) return;

    if (watchLaterMovies.length === 0) {
      getDocument(user, CategoryType.Later)
        .then(data => dispatch(setWatchLaterMovies(Object.values(data as Object))))
        .catch(err => console.log(err));
    }
  }, [watchLaterMovies, user]);

  return (
    <Wrapper>
      <h1>Favorite Movies</h1>
      <MovieList movies={watchLaterMovies}/>
    </Wrapper>
  );
};

export default WatchLater;