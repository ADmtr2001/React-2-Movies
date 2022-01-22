import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import firebase from "firebase/compat";
import {IMovie} from "../../../types/IMovie";

interface UserState {
  user: firebase.User | null;
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
    setUser(state, action: PayloadAction<firebase.User | null>) {
      state.user = action.payload
    }
  },
});