import {createAsyncThunk} from "@reduxjs/toolkit";
import {movieApi} from "../../../apis/movieApi";

import {IMovie} from "../../../types/IMovie";
import {APIKey} from "../../../apis/movieApiKey";

export  const fetchAsyncMovies = createAsyncThunk(
  'movie/fetchMovies',
  async (term, thunkAPI) => {
    try {
      const response = await movieApi.get<IMovie>(
        `?apiKey=${APIKey}&s=Hurry&type=movie`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed');
    }
  }
);