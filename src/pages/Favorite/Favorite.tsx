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

  useEffect(() => {
    if (!user) return;

    getDocument(user, CategoryType.Favorite)
      .then(data => dispatch(setFavoriteMovies(Object.values(data as Object))))
      .catch(err => console.log(err));
  }, [user]);

  return (
    <Wrapper>
      <h1>Favorite Movies</h1>
      <MovieList movies={favoriteMovies}/>
    </Wrapper>
  );
};

export default Favorite;