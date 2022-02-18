import React, {useEffect} from 'react';

import MovieList from "../../components/Lists/MovieList/MovieList";

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getDocument} from "../../common/firebase/database";
import {setFavoriteMovies} from "../../store/reducers/user/userSlice";

import {Wrapper} from "./Favorite.styles";

import {CategoryType} from "../../types/IDatabase";


const Favorite = () => {
  const {user, favoriteMovies} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <MovieList movies={favoriteMovies} title='Favorite Movies'/>
    </Wrapper>
  );
};

export default Favorite;