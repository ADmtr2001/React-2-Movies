import React, {FC, useEffect, useState} from 'react';

import {AiFillStar} from "../../common/react-icons/icons";

import {useNavigate} from "react-router-dom";

import {Wrapper} from "./SingleMovie.styles";

import Button from "../UI/Button/Button";
import {ISingleMovie} from "../../types/IMovie";


interface SingleMovieProps {
  movie: ISingleMovie;
}

const SingleMovie: FC<SingleMovieProps> = ({movie}) => {
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
        </div>
      </div>
      <div className='buttons-container'>
        <Button onClick={navigateBack}>Back</Button>
      </div>
    </Wrapper>
  );
};

export default SingleMovie;