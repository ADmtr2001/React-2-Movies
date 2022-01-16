import React, {useEffect} from 'react';

import SingleMovie from "../../components/SingleMovie/SingleMovie";

import {useParams} from "react-router-dom";

import {Wrapper} from "./Movie.styles";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchAsyncSingleMovie} from "../../store/reducers/movie/MovieActionCreators";

const Movie = () => {
  const {id} = useParams();
  const {singleMovie} = useAppSelector(state => state.movie);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!id) return;

    dispatch(fetchAsyncSingleMovie(id));
  }, []);

  return (
    <Wrapper>
      <SingleMovie movie={singleMovie ? singleMovie : null}/>
    </Wrapper>
  );
};

export default Movie;