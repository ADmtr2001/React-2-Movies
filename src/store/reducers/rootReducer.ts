import {combineReducers} from "@reduxjs/toolkit";

import {movieSlice} from "./movie/movieSlice";
import {userSlice} from "./user/userSlice";
import {globalSlice} from "./global/globalSlice";

export const rootReducer = combineReducers({
  movie: movieSlice.reducer,
  user: userSlice.reducer,
  global: globalSlice.reducer,
});

