import React from 'react';

import {Wrapper} from "./Home.styles";
import MovieList from "../MovieList/MovieList";
import {useAppSelector} from "../../hooks/redux";

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