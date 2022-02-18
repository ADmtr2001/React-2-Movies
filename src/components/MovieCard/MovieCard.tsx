import React, {FC} from 'react';

import FilmActionButton from "../UI/FilmActionButton/FilmActionButton";
import {AiOutlineStar, MdOutlineWatchLater} from "../../common/react-icons/icons";

import {useAppSelector} from "../../hooks/redux";
import {scrollToTop} from "../../helpers/scrollToTop";
import {addFilmToCategory, removeFilmFromCategory} from "../../common/firebase/database";

import {Wrapper} from "./MovieCard.styles";

import {IMovie} from "../../types/IMovie";
import {CategoryType} from "../../types/IDatabase";
import {IUser} from "../../types/IUser";

interface MovieCardProps {
  movie: IMovie;
  isFavorite: boolean;
  isWatchLater: boolean;
}

const MovieCard: FC<MovieCardProps> = ({movie, isFavorite, isWatchLater}) => {
  const handleAddToFavorite = (user: IUser) => {
    addFilmToCategory(movie, user, CategoryType.Favorite);
  }

  const handleRemoveFromFavorite = (user: IUser) => {
    removeFilmFromCategory(movie.imdbID, user, CategoryType.Favorite);
  }

  const handleAddToWatchLater = (user: IUser) => {
    addFilmToCategory(movie, user, CategoryType.Later);
  }

  const handleRemoveFromWatchLater = (user: IUser) => {
    removeFilmFromCategory(movie.imdbID, user, CategoryType.Later);
  }

  return (
    <Wrapper to={`/movie/${movie.imdbID}`} onClick={scrollToTop} poster={movie.Poster}>
      <div className='buttons-container'>
        <FilmActionButton active={isFavorite} onClick={isFavorite ? handleRemoveFromFavorite : handleAddToFavorite}><AiOutlineStar/></FilmActionButton>
        <FilmActionButton active={isWatchLater} onClick={isWatchLater ? handleRemoveFromWatchLater : handleAddToWatchLater}><MdOutlineWatchLater/></FilmActionButton>
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