import {IMovie, ISingleMovie} from "../../../types/IMovie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchAsyncMovies, fetchAsyncRecommended, fetchAsyncShows, fetchAsyncSingleMovie} from "./movieActionCreators";
import {IComment} from "../../../types/IComment";

interface MovieState {
  movies: IMovie[];
  shows: IMovie[];
  recommended: IMovie[];
  singleMovie: ISingleMovie | null;
  singleMovieComments: IComment[];
  moviesIsLoading: boolean;
  showsIsLoading: boolean;
  recommendedIsLoading: boolean;
  singleMovieIsLoading: boolean;
  moviesError: string;
  showsError: string;
  recommendedError: string;
  singleMovieError: string;
};

const initialState: MovieState = {
  movies: [],
  shows: [],
  recommended: [],
  singleMovie: null,
  singleMovieComments: [],
  moviesIsLoading: false,
  showsIsLoading: false,
  recommendedIsLoading: false,
  singleMovieIsLoading: false,
  moviesError: '',
  showsError: '',
  recommendedError: '',
  singleMovieError: '',
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSingleMovieComments(state, action: PayloadAction<IComment[]>) {
      state.singleMovieComments = action.payload;
    }
  },
  extraReducers: {
    [fetchAsyncMovies.fulfilled.type]: (
      state: MovieState,
      action: PayloadAction<IMovie[]>
    ) => {
      state.moviesIsLoading = false;
      state.moviesError = '';
      state.movies = action.payload;
    },
    [fetchAsyncMovies.pending.type]: (state: MovieState) => {
      state.moviesIsLoading = true;
    },
    [fetchAsyncMovies.rejected.type]: (
      state: MovieState,
      action: PayloadAction<string>
    ) => {
      state.moviesIsLoading = false;
      state.moviesError = action.payload;
    },
    [fetchAsyncShows.fulfilled.type]: (
      state: MovieState,
      action: PayloadAction<IMovie[]>
    ) => {
      state.showsIsLoading = false;
      state.showsError = '';
      state.shows = action.payload;
    },
    [fetchAsyncShows.pending.type]: (state: MovieState) => {
      state.showsIsLoading = true;
    },
    [fetchAsyncShows.rejected.type]: (
      state: MovieState,
      action: PayloadAction<string>
    ) => {
      state.showsIsLoading = false;
      state.showsError = action.payload;
    },
    [fetchAsyncRecommended.fulfilled.type]: (
      state: MovieState,
      action: PayloadAction<IMovie[]>
    ) => {
      state.recommendedIsLoading = false;
      state.recommendedError = '';
      state.recommended = action.payload;
    },
    [fetchAsyncRecommended.pending.type]: (state: MovieState) => {
      state.recommendedIsLoading = true;
    },
    [fetchAsyncRecommended.rejected.type]: (
      state: MovieState,
      action: PayloadAction<string>
    ) => {
      state.recommendedIsLoading = false;
      state.recommendedError = action.payload;
    },
    [fetchAsyncSingleMovie.fulfilled.type]: (
      state: MovieState,
      action: PayloadAction<ISingleMovie>
    ) => {
      state.singleMovieIsLoading = false;
      state.singleMovieError = '';
      state.singleMovie = action.payload;
    },
    [fetchAsyncSingleMovie.pending.type]: (state: MovieState) => {
      state.singleMovieIsLoading = true;
    },
    [fetchAsyncSingleMovie.rejected.type]: (
      state: MovieState,
      action: PayloadAction<string>
    ) => {
      state.singleMovieIsLoading = false;
      state.singleMovieError = action.payload;
    }
  }
});

export const {
  setSingleMovieComments,
} = movieSlice.actions;