import React, {useEffect} from 'react';

import SingleMovie from "../../components/SingleMovie/SingleMovie";
import Loader from "../../components/UI/Loader/Loader";
import PageNotFound from "../PageNotFound/PageNotFound";

import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchAsyncSingleMovie} from "../../store/reducers/movie/movieActionCreators";

import {Wrapper} from "./Movie.styles";


const Movie = () => {
  const {id} = useParams();
  const {singleMovie, singleMovieIsLoading, singleMovieError} = useAppSelector(state => state.movie);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!id) return;

    dispatch(fetchAsyncSingleMovie(id));
  }, []);

  if (singleMovieError) {
    return <PageNotFound/>
  }

  if (singleMovieIsLoading) {
    return <Loader/>;
  }

  return (
    <Wrapper>
      {singleMovie ? <SingleMovie movie={singleMovie}/> : null}
    </Wrapper>
  );
};

export default Movie;