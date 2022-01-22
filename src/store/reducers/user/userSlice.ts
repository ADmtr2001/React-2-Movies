import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import firebase from "firebase/compat";
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
    }
  },
});

export const {
  setUser
} = userSlice.actions;