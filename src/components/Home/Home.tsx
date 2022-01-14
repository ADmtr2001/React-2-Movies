import React from 'react';

import MovieList from "../MovieList/MovieList";

import {useAppSelector} from "../../hooks/redux";

import {Wrapper} from "./Home.styles";

const Home = () => {
  const {movies, shows, recommended} = useAppSelector(state => state.movie);

  return (
    <Wrapper>
      <MovieList movies={recommended} title={'Recommended Movies'}/>
      <MovieList movies={movies} title={'Trending Movies'}/>
      <MovieList movies={shows} title={'Trending Shows'}/>
    </Wrapper>
  );
};

export default Home;