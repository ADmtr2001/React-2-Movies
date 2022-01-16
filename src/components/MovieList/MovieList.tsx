import React, {FC} from 'react';

import MovieCard from "../MovieCard/MovieCard";
import Slider from 'react-slick'
import {Settings} from "../../common/slider/settings";

import {Wrapper} from "./MovieList.styles";

import {IMovie} from "../../types/IMovie";
import Loader from "../UI/Loader/Loader";

interface MovieListProps {
  title: string;
  movies: IMovie[];
  isLoading: boolean;
}

const MovieList: FC<MovieListProps> = ({title, movies, isLoading}) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {isLoading
        ? (<Loader/>)
        : (
        <Slider {...Settings}>
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie}/>
          ))}
        </Slider>
      )}
    </Wrapper>
  );
};

export default MovieList;