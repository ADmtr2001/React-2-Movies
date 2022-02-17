import React, {FC} from 'react';

import MovieCard from "../../MovieCard/MovieCard";
import Slider from 'react-slick'
import Loader from "../../UI/Loader/Loader";

import {Wrapper} from "./MovieSliderList.styles";
import {Settings} from "../../../common/slider/settings";

import {IMovie} from "../../../types/IMovie";
import {useAppSelector} from "../../../hooks/redux";

interface MovieListSliderProps {
  title: string;
  movies: IMovie[];
  isLoading: boolean;
}

const isFavorite = (movieID: string, favoriteMovies: IMovie[]) => {
  if (favoriteMovies.find((movie) => movie.imdbID === movieID)) return true;
  return  false;
}

const isWatchLater = (movieID: string, watchLaterMovies: IMovie[]) => {
  if (watchLaterMovies.find((movie) => movie.imdbID === movieID)) return true;
  return  false;
}

const MovieSliderList: FC<MovieListSliderProps> = ({title, movies, isLoading}) => {
  const {favoriteMovies, watchLaterMovies} = useAppSelector(state => state.user);
  console.log(favoriteMovies, watchLaterMovies);

  const moviesList = movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} isFavorite={isFavorite(movie.imdbID, favoriteMovies)} isWatchLater={isWatchLater(movie.imdbID, watchLaterMovies)}/>);

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

export default MovieSliderList;