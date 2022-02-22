import React, {useEffect, useState} from 'react';

import SingleMovie from "../../components/SingleMovie/SingleMovie";
import Loader from "../../components/UI/Loader/Loader";
import PageNotFound from "../PageNotFound/PageNotFound";

import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchAsyncSingleMovie} from "../../store/reducers/movie/movieActionCreators";

import {Wrapper} from "./Movie.styles";
import Comments from "../../components/Comments/Comments";
import Button from "../../components/UI/Button/Button";
import {getFilmComments} from "../../common/firebase/database";
import {setSingleMovieComments} from "../../store/reducers/movie/movieSlice";


const Movie = () => {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const {id, isFavorite, isWatchLater} = useParams();
  const {singleMovie, singleMovieIsLoading, singleMovieError, singleMovieComments} = useAppSelector(state => state.movie);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!id) return;

    dispatch(setSingleMovieComments([]));
    dispatch(fetchAsyncSingleMovie(id));
  }, []);

  if (!id || !isFavorite || !isWatchLater) return <h1>Error...</h1>;

  if (singleMovieError) {
    return <PageNotFound/>
  }

  if (singleMovieIsLoading) {
    return <Loader/>;
  }

  const getComments = async () => {
    await getFilmComments(id, dispatch);
    setIsCommentsVisible(true);
  }

  return (
    <Wrapper>
      {singleMovie && (
        <>
          <SingleMovie movie={singleMovie} isFavorite={isFavorite === 'true'} isWatchLater={isWatchLater === 'true'}/>
          {isCommentsVisible ? (<Comments filmId = {id} comments={singleMovieComments}/>) : (<Button onClick={getComments}>Load Comments</Button>)}
        </>
      )}
    </Wrapper>
  );
};

export default Movie;