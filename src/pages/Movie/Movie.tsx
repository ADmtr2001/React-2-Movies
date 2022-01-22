import React, {useEffect} from 'react';

import SingleMovie from "../../components/SingleMovie/SingleMovie";

import {useParams, useNavigate} from "react-router-dom";

import {Wrapper} from "./Movie.styles";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchAsyncSingleMovie} from "../../store/reducers/movie/movieActionCreators";
import Loader from "../../components/UI/Loader/Loader";
import PageNotFound from "../PageNotFound/PageNotFound";

const Movie = () => {
  const {id} = useParams();
  const {singleMovie, singleMovieIsLoading, singleMovieError} = useAppSelector(state => state.movie);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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