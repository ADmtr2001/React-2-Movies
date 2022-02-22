import React from 'react';

import MovieList from "../../components/Lists/MovieList/MovieList";

import {useAppSelector} from "../../hooks/redux";

import {Wrapper} from "./WatchLater.styles";

const WatchLater = () => {
  const {watchLaterMovies} = useAppSelector(state => state.user);

  return (
    <Wrapper>
      <MovieList movies={watchLaterMovies} title='Watch Later Movies'/>
    </Wrapper>
  );
};

export default WatchLater;