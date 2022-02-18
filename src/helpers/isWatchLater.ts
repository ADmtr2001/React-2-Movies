import {IMovie} from "../types/IMovie";

export const isWatchLater = (movieID: string, watchLaterMovies: IMovie[]) => {
  if (watchLaterMovies.find((movie) => movie.imdbID === movieID)) return true;
  return  false;
}