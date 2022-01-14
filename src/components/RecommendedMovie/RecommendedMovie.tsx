import React from 'react';

import StyledLink from "../UI/StyledLink/StyledLink";

import {Wrapper} from "./RecommendedMovie.styles";
import {AiFillStar} from 'react-icons/ai'

const RecommendedMovie = () => {
  return (
    <Wrapper>
      <div className='gradient'>
        <div className='container'>
          <div className='description'>
            <h1>The Croods</h1>
            <p className='short-info'>2013 | 7+ | 1h 38m | Family Movies</p>
            <p className='main-text'>When an earthquake obliterates their cave, an unworldly prehistoric family is forced to journey through unfamiliar terrain in search of a new home.
            </p>
            <p className='cast-text'>Starring:Nicolas Cage, Emma Stone, Ryan Reynolds</p>
            <div className='rating'>
              <AiFillStar/> 7.2
            </div>
            <div className='buttons'>
              <StyledLink/>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default RecommendedMovie;