import React, {FC, useEffect, useState} from 'react';

import {AiFillStar, AiOutlineStar, MdOutlineWatchLater} from "../../common/react-icons/icons";
import Button from "../UI/Button/Button";
import FilmActionButton from "../UI/FilmActionButton/FilmActionButton";

import {useNavigate} from "react-router-dom";
import {addFilmToCategory, removeFilmFromCategory} from "../../common/firebase/database";

import {Wrapper} from "./SingleMovie.styles";

import {ISingleMovie} from "../../types/IMovie";
import {IUser} from "../../types/IUser";
import {Collection} from "../../types/IDatabase";


interface SingleMovieProps {
  movie: ISingleMovie;
  isFavorite: boolean;
  isWatchLater: boolean;
}

const SingleMovie: FC<SingleMovieProps> = ({movie, isFavorite, isWatchLater}) => {
  const [isPlotFull, setIsPlotFull] = useState(false);
  const [isMoreButtonVisible, setIsMoveButtonVisible] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if (movie.Plot.length <= 500) {
      setIsPlotFull(true);
      setIsMoveButtonVisible(false);
    } else {
      setIsPlotFull(false);
      setIsMoveButtonVisible(true);
    }
  }, []);

  const togglePlotVisibility = () => {
    setIsPlotFull((value) => {
      return !value;
    });
  };

  const navigateBack = () => {
    navigate(-1);
  };

  let plot: React.ReactNode;
  if (isPlotFull && !isMoreButtonVisible) {
    plot = movie.Plot;
  } else if (isPlotFull) {
    plot = <>{movie.Plot} <button onClick={togglePlotVisibility}>hide...</button></>
  } else {
    plot = <>{movie.Plot.slice(0, 500)} <button onClick={togglePlotVisibility}>more...</button></>
  }

  const handleAddToFavorite = (user: IUser) => {
    addFilmToCategory(movie, user, Collection.Favorite);
    navigate(`/movie/${movie.imdbID}/true/${isWatchLater}`, {replace: true});
  }

  const handleRemoveFromFavorite = (user: IUser) => {
    removeFilmFromCategory(movie.imdbID, user, Collection.Favorite);
    navigate(`/movie/${movie.imdbID}/false/${isWatchLater}`, {replace: true});
  }

  const handleAddToWatchLater = (user: IUser) => {
    addFilmToCategory(movie, user, Collection.Later);
    navigate(`/movie/${movie.imdbID}/${isFavorite}/true`, {replace: true});
  }

  const handleRemoveFromWatchLater = (user: IUser) => {
    removeFilmFromCategory(movie.imdbID, user, Collection.Later);
    navigate(`/movie/${movie.imdbID}/${isFavorite}/false`, {replace: true});
  }

  return (
    <Wrapper>
      <div className='container'>
        <div className='description-container'>
          <h1>{movie.Title}</h1>
          <p className='short-info'>{movie.Year} | {movie.Rated} | {movie.Runtime} | {movie.Genre}</p>
          <p className='main-text'>{plot}</p>
          <p className='cast-text'>Starring: {movie.Actors}</p>
          <div className='rating'>
            <AiFillStar/> {movie.imdbRating}
          </div>
        </div>
        <div className='image-container'>
          <img src={movie.Poster} alt='poster'/>
          <div className='movie-buttons'>
            <FilmActionButton active={isFavorite} onClick={isFavorite ? handleRemoveFromFavorite : handleAddToFavorite} width='50%'><AiOutlineStar/></FilmActionButton>
            <FilmActionButton active={isWatchLater} onClick={isWatchLater ? handleRemoveFromWatchLater : handleAddToWatchLater} width='50%'><MdOutlineWatchLater/></FilmActionButton>
          </div>
        </div>
      </div>
      <div className='buttons-container'>
        <Button onClick={navigateBack}>Back</Button>
      </div>
    </Wrapper>
  );
};

export default SingleMovie;