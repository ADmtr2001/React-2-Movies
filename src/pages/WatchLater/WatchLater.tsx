import React, {useEffect} from 'react';

import MovieList from "../../components/Lists/MovieList/MovieList";

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getDocument} from "../../common/firebase/database";
import {setWatchLaterMovies} from "../../store/reducers/user/userSlice";

import {Wrapper} from "./WatchLater.styles";

import {CategoryType} from "../../types/IDatabase";

const WatchLater = () => {
  const {user, watchLaterMovies} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (!user) return;

    getDocument(user, CategoryType.Later)
      .then(data => {
        if (data) {
          dispatch(setWatchLaterMovies(Object.values(data as Object)));
        }
      })
      .catch(err => console.log(err));
  }, [user]);

  return (
    <Wrapper>
      <h1>Watch Later Movies</h1>
      <MovieList movies={watchLaterMovies}/>
    </Wrapper>
  );
};

export default WatchLater;