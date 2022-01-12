import {combineReducers} from "@reduxjs/toolkit";
import {movieSlice} from "./movie/MovieSlice";

export const rootReducer = combineReducers({
  movie: movieSlice.reducer
});

