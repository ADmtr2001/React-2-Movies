import React, {useEffect, useRef} from 'react';

import SearchForm from "../../components/UI/Search/SearchForm";
import MovieList from "../../components/Lists/MovieList/MovieList";

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchAsyncMovies, fetchAsyncShows} from "../../store/reducers/movie/movieActionCreators";

import {Wrapper} from "./Search.styles";
import Loader from "../../components/UI/Loader/Loader";

const Search = () => {
  const dispatch = useAppDispatch();
  const searchRef = useRef<HTMLInputElement>(null);
  const {movies, shows, moviesIsLoading, showsIsLoading} = useAppSelector(state => state.movie);

  useEffect(() => {
    searchRef?.current?.focus();

    if (movies.length === 0) {
      dispatch(fetchAsyncMovies('Harry Potter'));
      dispatch(fetchAsyncShows('American'));
    }
  }, []);

  let content: React.ReactNode;
  if (moviesIsLoading || showsIsLoading) {
    content = <Loader/>
  } else if (movies.length === 0 && shows.length === 0) {
    content = <h1 className='error-container'>Sorry, site search did not return any results. Try changing or shortening your request.</h1>
  } else {
    content = <MovieList movies={[...movies, ...shows]} title='Result'/>
  }

  return (
    <Wrapper>
      <SearchForm ref={searchRef}/>
      {content}
    </Wrapper>
  );
};

export default Search;