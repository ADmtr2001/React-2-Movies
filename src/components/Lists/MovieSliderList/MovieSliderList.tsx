import React, {FC} from 'react';

import MovieCard from "../../MovieCard/MovieCard";
import Slider from 'react-slick'
import Loader from "../../UI/Loader/Loader";

import {useAppSelector} from "../../../hooks/redux";
import {isFavorite} from "../../../helpers/isFavorite";
import {isWatchLater} from "../../../helpers/isWatchLater";

import {Wrapper} from "./MovieSliderList.styles";
import {Settings} from "../../../common/slider/settings";

import {IMovie} from "../../../types/IMovie";


interface MovieListSliderProps {
  title: string;
  movies: IMovie[];
  isLoading: boolean;
}

const MovieSliderList: FC<MovieListSliderProps> = ({title, movies, isLoading}) => {
  const {favoriteMovies, watchLaterMovies} = useAppSelector(state => state.user);

  const moviesList = movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} isFavoriteMovie={isFavorite(movie.imdbID, favoriteMovies)} isWatchLaterMovie={isWatchLater(movie.imdbID, watchLaterMovies)}/>);

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