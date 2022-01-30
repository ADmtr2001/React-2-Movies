import React, {FC} from 'react';

import FilmActionButton from "../UI/FilmActionButton/FilmActionButton";
import {AiOutlineStar, BsSearch, MdOutlineWatchLater} from "../../common/react-icons/icons";

import {useAppSelector} from "../../hooks/redux";
import {scrollToTop} from "../../helpers/scrollToTop";
import {addFilmToCategory} from "../../common/firebase/database";

import {Wrapper} from "./MovieCard.styles";

import {IMovie} from "../../types/IMovie";
import {CategoryType} from "../../types/IDatabase";

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard: FC<MovieCardProps> = ({movie}) => {
  const {user} = useAppSelector(state => state.user);

  const handleAddToFavorite = (e:  React.MouseEvent<HTMLButtonElement>, category: CategoryType) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) return;

    addFilmToCategory(e, movie, user, category);
  }

  return (
    <Wrapper to={`/movie/${movie.imdbID}`} onClick={scrollToTop} poster={movie.Poster}>
      <div className='buttons-container'>
        <FilmActionButton onClick={(e) => handleAddToFavorite(e, CategoryType.Favorite)}><AiOutlineStar/></FilmActionButton>
        <FilmActionButton onClick={(e) => handleAddToFavorite(e, CategoryType.Later)}><MdOutlineWatchLater/></FilmActionButton>
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