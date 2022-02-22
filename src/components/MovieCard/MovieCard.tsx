import React, {FC} from 'react';

import FilmActionButton from "../UI/FilmActionButton/FilmActionButton";
import {AiOutlineStar, MdOutlineWatchLater} from "../../common/react-icons/icons";

import {scrollToTop} from "../../helpers/scrollToTop";
import {addFilmToCategory, removeFilmFromCategory} from "../../common/firebase/database";

import {Wrapper} from "./MovieCard.styles";

import {IMovie} from "../../types/IMovie";
import {IUser} from "../../types/IUser";
import {Collection} from "../../types/IDatabase";

interface MovieCardProps {
  movie: IMovie;
  isFavoriteMovie: boolean;
  isWatchLaterMovie: boolean;
}

const MovieCard: FC<MovieCardProps> = ({movie, isFavoriteMovie, isWatchLaterMovie}) => {
  const handleAddToFavorite = (user: IUser) => {
    addFilmToCategory(movie, user, Collection.Favorite);
  }

  const handleRemoveFromFavorite = (user: IUser) => {
    removeFilmFromCategory(movie.imdbID, user, Collection.Favorite);
  }

  const handleAddToWatchLater = (user: IUser) => {
    addFilmToCategory(movie, user, Collection.Later);
  }

  const handleRemoveFromWatchLater = (user: IUser) => {
    removeFilmFromCategory(movie.imdbID, user, Collection.Later);
  }

  return (
    <Wrapper to={`/movie/${movie.imdbID}/${isFavoriteMovie}/${isWatchLaterMovie}`} onClick={scrollToTop} poster={movie.Poster}>
      <div className='buttons-container'>
        <FilmActionButton active={isFavoriteMovie} onClick={isFavoriteMovie ? handleRemoveFromFavorite : handleAddToFavorite}><AiOutlineStar/></FilmActionButton>
        <FilmActionButton active={isWatchLaterMovie} onClick={isWatchLaterMovie ? handleRemoveFromWatchLater : handleAddToWatchLater}><MdOutlineWatchLater/></FilmActionButton>
      </div>
      <div className='content-container'>
        <div className='description-container'>
          <h3>{movie.Title.length > 50 ? `${movie.Title.slice(0, 50)}...` : movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default MovieCard;