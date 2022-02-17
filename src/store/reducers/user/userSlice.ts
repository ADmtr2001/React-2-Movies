import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie} from "../../../types/IMovie";
import {IUser} from "../../../types/IUser";

interface UserState {
  user: IUser | null;
  favoriteMovies: IMovie[];
  watchLaterMovies: IMovie[];
};

const initialState: UserState = {
  user: null,
  favoriteMovies: [],
  watchLaterMovies: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser | null>) {
      state.user = action.payload;
      if (action.payload !== null) localStorage.setItem('user', 'true');
      else localStorage.removeItem('user');
    },
    setFavoriteMovies(state, action: PayloadAction<IMovie[]>) {
      state.favoriteMovies = action.payload;
      console.log('set favorite movies');
    },
    setWatchLaterMovies(state, action: PayloadAction<IMovie[]>) {
      state.watchLaterMovies = action.payload;
      console.log('set watch later movies');
    },
  },
});

export const {
  setUser,
  setFavoriteMovies,
  setWatchLaterMovies,
} = userSlice.actions;