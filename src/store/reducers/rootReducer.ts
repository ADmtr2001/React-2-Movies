import {combineReducers} from "@reduxjs/toolkit";
import {movieSlice} from "./movie/movieSlice";
import {userSlice} from "./user/userSlice";

export const rootReducer = combineReducers({
  movie: movieSlice.reducer,
  user: userSlice.reducer,
});

