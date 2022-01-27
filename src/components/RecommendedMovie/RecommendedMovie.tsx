import React from 'react';

import StyledLink from "../UI/StyledLink/StyledLink";
import {AiFillStar} from "../../common/react-icons/icons";

import {Wrapper} from "./RecommendedMovie.styles";

const RecommendedMovie = () => {
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
              <StyledLink to='/movie/tt0481499' text='Film Page'/>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default RecommendedMovie;