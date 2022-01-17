import React, {useEffect} from 'react';

import MovieList from "../MovieList/MovieList";

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchAsyncMovies, fetchAsyncRecommended, fetchAsyncShows} from "../../store/reducers/movie/MovieActionCreators";

import {Wrapper} from "./Home.styles";

const Home = () => {
  const dispatch = useAppDispatch();
  const {movies, shows, recommended, moviesIsLoading, showsIsLoading, recommendedIsLoading} = useAppSelector(state => state.movie);

  useEffect(() => {
    dispatch(fetchAsyncMovies('Harry Potter'));
    dispatch(fetchAsyncShows('American'));
    dispatch(fetchAsyncRecommended('House'));
  }, []);

  return (
    <Wrapper>
      <MovieList movies={recommended} title={'Recommended Movies'} isLoading={recommendedIsLoading}/>
      <MovieList movies={movies} title={'Trending Movies'} isLoading={moviesIsLoading}/>
      <MovieList movies={shows} title={'Trending Shows'} isLoading={showsIsLoading}/>
    </Wrapper>
  );
};

export default Home;