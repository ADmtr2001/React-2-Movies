import React, {FC} from 'react';

import MovieCard from "../../MovieCard/MovieCard";

import {Wrapper} from "./MovieList.styles";

import {IMovie} from "../../../types/IMovie";
import {useAppSelector} from "../../../hooks/redux";

interface MovieListProps {
  movies: IMovie[];
}

const isFavorite = (movieID: string, favoriteMovies: IMovie[]) => {
  if (favoriteMovies.find((movie) => movie.imdbID === movieID)) return true;
  return  false;
}

const isWatchLater = (movieID: string, watchLaterMovies: IMovie[]) => {
  if (watchLaterMovies.find((movie) => movie.imdbID === movieID)) return true;
  return  false;
}

const MovieList: FC<MovieListProps> = ({movies}) => {
  const {favoriteMovies, watchLaterMovies} = useAppSelector(state => state.user);


  return (
    <Wrapper>
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} isFavorite={isFavorite(movie.imdbID, favoriteMovies)} isWatchLater={isWatchLater(movie.imdbID, watchLaterMovies)}/>
      ))}
    </Wrapper>
  );
};

export default MovieList;