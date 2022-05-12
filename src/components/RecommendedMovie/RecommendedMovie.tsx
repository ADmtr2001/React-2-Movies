import React from 'react';

import StyledLink from "../UI/StyledLink/StyledLink";

import {useAppSelector} from "../../hooks/redux";
import {isFavorite} from "../../helpers/isFavorite";
import {isWatchLater} from "../../helpers/isWatchLater";

import {Wrapper} from "./RecommendedMovie.styles";
import {AiFillStar} from "../../common/react-icons/icons";

const RecommendedMovie = () => {
  const {favoriteMovies, watchLaterMovies} = useAppSelector(state => state.user);

  const isFavoriteMovie = isFavorite('tt0481499', favoriteMovies);
  const isWatchLaterMovie = isWatchLater('tt0481499', watchLaterMovies);

  return (
    <Wrapper>
      <div className='gradient'>
        <div className='container'>
          <div className='description-container'>
            <h1>The Croods</h1>
            <p className='short-info'>2013 | 7+ | 1h 38m | Family Movies</p>
            <p className='main-text'>When an earthquake obliterates their cave, an unworldly prehistoric family is forced to journey through unfamiliar terrain in search of a new home.
            </p>
            <p className='cast-text'>Starring: Nicolas Cage, Emma Stone, Ryan Reynolds</p>
            <div className='rating'>
              <AiFillStar/> 7.2
            </div>
            <div className='buttons-container'>
              <StyledLink to={`/movie/tt0481499/${isFavoriteMovie}/${isWatchLaterMovie}`} text='Film Page'/>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default RecommendedMovie;