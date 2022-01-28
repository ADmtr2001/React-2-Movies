import React, {FC} from 'react';

import MovieCard from "../../MovieCard/MovieCard";

import {Wrapper} from "./MovieList.styles";

import {IMovie} from "../../../types/IMovie";

interface MovieListProps {
  movies: IMovie[];
}

const MovieList: FC<MovieListProps> = ({movies}) => {
  return (
    <Wrapper>
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie}/>
      ))}
    </Wrapper>
  );
};

export default MovieList;