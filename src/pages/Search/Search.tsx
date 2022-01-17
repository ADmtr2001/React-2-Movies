import React from 'react';

import SearchForm from "../../components/UI/Search/SearchForm";
import MovieList from "../../components/MovieList/MovieList";

import {useAppSelector} from "../../hooks/redux";

import {Wrapper} from "./Search.styles";

const Search = () => {
  const {movies, shows, moviesIsLoading, showsIsLoading} = useAppSelector(state => state.movie);

  return (
    <Wrapper>
      <SearchForm/>
      {movies.length !== 0 && <MovieList movies={movies} title={'Movies'} isLoading={moviesIsLoading}/>}
      {shows.length !== 0 && <MovieList movies={shows} title={'Shows'} isLoading={showsIsLoading}/>}
      {movies.length === 0 && shows.length === 0 && <h1 className='error-container'>Sorry, site search did not return any results. Try changing or shortening your request.</h1>}
    </Wrapper>
  );
};

export default Search;