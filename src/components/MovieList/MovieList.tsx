import React, {FC} from 'react';

import {Wrapper} from "./MovieList.styles";
import {IMovie} from "../../types/IMovie";
import MovieCard from "../MovieCard/MovieCard";
import Slider from 'react-slick'

import {Settings} from "../../common/slider/settings";

interface MovieListProps {
  title: string;
  movies: IMovie[];
}

const MovieList: FC<MovieListProps> = ({title, movies}) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {/*<div className='movie-container'>*/}
      <Slider {...Settings}>
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie}/>
        ))}
      </Slider>
      {/*</div>*/}
    </Wrapper>
  );
};

export default MovieList;