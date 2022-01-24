import React, {useEffect} from 'react';

import {Wrapper} from "./Favorite.styles";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {CategoryType, getDocument} from "../../common/firebase/database";
import {setFavoriteMovies, setWatchLaterMovies} from "../../store/reducers/user/userSlice";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieList from "../../components/MovieList/MovieList";

const Favorite = () => {
  const {user, favoriteMovies} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (!user) return;

    if (favoriteMovies.length === 0) {
       getDocument(user, CategoryType.Favorite)
         .then(data => dispatch(setFavoriteMovies(Object.values(data as Object))))
         .catch(err => console.log(err));
    }
  }, [favoriteMovies, user]);

  return (
    <Wrapper>
      <h1>Favorite Movies</h1>
      <MovieList movies={favoriteMovies}/>
    </Wrapper>
  );
};

export default Favorite;