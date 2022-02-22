import {IMovie} from "../types/IMovie";

export const isFavorite = (movieID: string, favoriteMovies: IMovie[]) => {
  if (favoriteMovies.find((movie) => movie.imdbID === movieID)) return true;

  return  false;
}