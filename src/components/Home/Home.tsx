import React, {useEffect} from 'react';

import MovieSliderList from "../Lists/MovieSliderList/MovieSliderList";

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchAsyncMovies, fetchAsyncRecommended, fetchAsyncShows} from "../../store/reducers/movie/movieActionCreators";

import {Wrapper} from "./Home.styles";

const Home = () => {
  const dispatch = useAppDispatch();
  const {
    movies,
    shows,
    recommended,
    moviesIsLoading,
    showsIsLoading,
    recommendedIsLoading
  } = useAppSelector(state => state.movie);

  useEffect(() => {
    if (movies.length !== 0) return;

    dispatch(fetchAsyncMovies('Harry Potter'));
    dispatch(fetchAsyncShows('American'));
    dispatch(fetchAsyncRecommended('House'));

  }, []);

  return (
    <Wrapper>
      <MovieSliderList movies={recommended} title={'Recommended Movies'} isLoading={recommendedIsLoading}/>
      <MovieSliderList movies={movies} title={'Trending Movies'} isLoading={moviesIsLoading}/>
      <MovieSliderList movies={shows} title={'Trending Shows'} isLoading={showsIsLoading}/>
    </Wrapper>
  );
};

export default Home;