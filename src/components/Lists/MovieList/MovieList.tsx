import React, {FC} from 'react';

import MovieCard from "../../MovieCard/MovieCard";

import {Wrapper} from "./MovieList.styles";

import {IMovie} from "../../../types/IMovie";
import {useAppSelector} from "../../../hooks/redux";
import {isFavorite} from "../../../helpers/isFavorite";
import {isWatchLater} from "../../../helpers/isWatchLater";

interface MovieListProps {
  movies: IMovie[];
  title: string;
}



const MovieList: FC<MovieListProps> = ({movies, title}) => {
  const {favoriteMovies, watchLaterMovies} = useAppSelector(state => state.user);

  const moviesList = movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} isFavorite={isFavorite(movie.imdbID, favoriteMovies)} isWatchLater={isWatchLater(movie.imdbID, watchLaterMovies)}/>);

  return (
    <>
      <h1>{title}</h1>
      <Wrapper>
        {moviesList}
      </Wrapper>
    </>
  );
};

export default MovieList;