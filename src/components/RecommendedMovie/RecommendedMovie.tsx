import React from 'react';

import {Wrapper} from "./RecommendedMovie.styles";

import {AiFillStar} from 'react-icons/ai'
import ReactPlayer from "react-player";
import StyledLink from "../UI/Button/StyledLink";

const RecommendedMovie = () => {
  return (
    <Wrapper>
      <div className='blur'>
        <div className='container'>
          <div className='description'>
            <h1>Spider-Man: No Way Home</h1>
            <p>In the film, Parker asks Dr. Stephen Strange (Cumberbatch) to use magic to make his Spider-Man identity a
              secret again following its public revelation at the end of Far From Home. When the spell goes wrong, the
              multiverse is broken open which allows visitors from alternate realities to enter Parker's universe.</p>
            <div className='rating'>
              <AiFillStar/> 9.2
            </div>
            <div className='buttons'>
              <StyledLink/>
            </div>
          </div>
          <div className='player'>
            <ReactPlayer
              width='550px'
              controls={true}
              url="https://www.youtube.com/watch?v=JfVOs4VSpmA&ab_channel=SonyPicturesEntertainment"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default RecommendedMovie;