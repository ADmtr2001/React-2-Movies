import {IMovie} from "../../../types/IMovie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchAsyncMovies} from "./MovieActionCreators";

interface MovieState {
  movies: IMovie[];
  isLoading: boolean;
  error: string;
};

const initialState: MovieState = {
  movies: [],
  isLoading: false,
  error: "",
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchAsyncMovies.fulfilled.type]: (
      state: MovieState,
      action: PayloadAction<IMovie[]>
    ) => {
      state.isLoading = false;
      state.error = '';
      state.movies = action.payload;
    },
    [fetchAsyncMovies.pending.type]: (state: MovieState) => {
      state.isLoading = true;
    },
    [fetchAsyncMovies.rejected.type]: (
      state: MovieState,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});
