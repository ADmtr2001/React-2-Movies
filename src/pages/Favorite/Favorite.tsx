import React from 'react';

import MovieList from "../../components/Lists/MovieList/MovieList";

import {useAppSelector} from "../../hooks/redux";

import {Wrapper} from "./Favorite.styles";


const Favorite = () => {
  const {favoriteMovies} = useAppSelector(state => state.user);

  return (
    <Wrapper>
      <MovieList movies={favoriteMovies} title='Favorite Movies'/>
    </Wrapper>
  );
};

export default Favorite;