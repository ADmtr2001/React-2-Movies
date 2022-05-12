import {createAsyncThunk} from "@reduxjs/toolkit";

import {movieApi} from "../../../common/apis/movieApi";
import {APIKey} from "../../../common/apis/movieApiKey";

export  const fetchAsyncMovies = createAsyncThunk(
  'movie/fetchMovies',
  async (term: string, thunkAPI) => {
    try {
      const response = await movieApi.get<any>(
        `?apiKey=${APIKey}&s=${term}&type=movie`
      );
      return response.data.Response === 'False' ? [] : response.data.Search;
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed');
    }
  }
);

export  const fetchAsyncShows = createAsyncThunk(
  'movie/fetchShows',
  async (term: string, thunkAPI) => {
    try {
      const response = await movieApi.get<any>(
        `?apiKey=${APIKey}&s=${term}&type=series`
      );
      return response.data.Response === 'False' ? [] : response.data.Search;
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed');
    }
  }
);

export const fetchAsyncRecommended = createAsyncThunk(
  'movie/fetchRecommended',
  async (term: string, thunkAPI) => {
    try {
      const response = await movieApi.get<any>(
        `?apiKey=${APIKey}&s=${term}`
      );
      return response.data.Response === 'False' ? [] : response.data.Search;
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed');
    }
  }
);

export const fetchAsyncSingleMovie = createAsyncThunk(
  'movie/fetchSingleMovie',
  async (id: string, thunkAPI) => {
    try {
      const response = await movieApi.get<any>(
        `?apiKey=${APIKey}&i=${id}&plot=full`
      );

      if (response.data.Response === 'False') throw Error('Failed to fetch data');

      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);