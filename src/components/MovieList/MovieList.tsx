import React, {FC} from 'react';

import MovieCard from "../MovieCard/MovieCard";
import Slider from 'react-slick'
import Loader from "../UI/Loader/Loader";

import {Wrapper} from "./MovieList.styles";
import {Settings} from "../../common/slider/settings";

import {IMovie} from "../../types/IMovie";

interface MovieListProps {
  title: string;
  movies: IMovie[];
  isLoading: boolean;
}

const MovieList: FC<MovieListProps> = ({title, movies, isLoading}) => {
  const moviesList = movies.map(movie => <MovieCard key={movie.imdbID} movie={movie}/>);

  let moviesField: React.ReactNode;
  if (isLoading) {
    moviesField = <Loader/>
  } else if (moviesList.length === 0) {
    moviesField = <p className='error-container'>No media for your request</p>
  } else {
    moviesField = (
      <Slider {...Settings}>
        {moviesList}
      </Slider>
    );
  }

  return (
    <Wrapper>
      <h2>{title}</h2>
      {moviesField}
    </Wrapper>
  );
};

export default MovieList;