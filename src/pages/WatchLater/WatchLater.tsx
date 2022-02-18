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

  return (
    <Wrapper>
      <MovieList movies={watchLaterMovies} title='Watch Later Movies'/>
    </Wrapper>
  );
};

export default WatchLater;