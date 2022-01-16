import React from 'react';

import MovieList from "../MovieList/MovieList";

import {useAppSelector} from "../../hooks/redux";

import {Wrapper} from "./Home.styles";

const Home = () => {
  const {movies, shows, recommended, moviesIsLoading, showsIsLoading, recommendedIsLoading} = useAppSelector(state => state.movie);

  return (
    <Wrapper>
      <MovieList movies={recommended} title={'Recommended Movies'} isLoading={moviesIsLoading}/>
      <MovieList movies={movies} title={'Trending Movies'} isLoading={showsIsLoading}/>
      <MovieList movies={shows} title={'Trending Shows'} isLoading={recommendedIsLoading}/>
    </Wrapper>
  );
};

export default Home;