import {createAsyncThunk} from "@reduxjs/toolkit";
import {movieApi} from "../../../common/apis/movieApi";

import {IMovie} from "../../../types/IMovie";
import {APIKey} from "../../../common/apis/movieApiKey";

export  const fetchAsyncMovies = createAsyncThunk(
  'movie/fetchMovies',
  async (term, thunkAPI) => {
    try {
      const response = await movieApi.get<any>(
        `?apiKey=${APIKey}&s=Harry Potter&type=movie`
      );
      return response.data.Response === 'False' ? [] : response.data.Search;
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed');
    }
  }
);

export  const fetchAsyncShows = createAsyncThunk(
  'movie/fetchShows',
  async (term, thunkAPI) => {
    try {
      const response = await movieApi.get<any>(
        `?apiKey=${APIKey}&s=House&type=series`
      );
      return response.data.Response === 'False' ? [] : response.data.Search;
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed');
    }
  }
);

export const fetchAsyncRecommended = createAsyncThunk(
  'movie/fetchRecommended',
  async (term, thunkAPI) => {
    try {
      const response = await movieApi.get<any>(
        `?apiKey=${APIKey}&s=American`
      );
      return response.data.Response === 'False' ? [] : response.data.Search;
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed');
    }
  }
)