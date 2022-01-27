import {Favorite, Main, Movie, PageNotFound, Search, User, WatchLater} from "../pages";

import {IRoute, RoutesNames} from "../types/IRoute";

export const publicRoutes: IRoute[] = [
  {path: RoutesNames.MAIN, element: Main},
  {path: RoutesNames.SEARCH, element: Search},
  {path: RoutesNames.MOVIE, element: Movie},
  {path: RoutesNames.PAGE_NOT_FOUND, element: PageNotFound}
];

export const privateRoutes: IRoute[] = [
  {path: RoutesNames.MAIN, element: Main},
  {path: RoutesNames.SEARCH, element: Search},
  {path: RoutesNames.MOVIE, element: Movie},
  {path: RoutesNames.FAVORITE, element: Favorite},
  {path: RoutesNames.WATCH_LATER, element: WatchLater},
  {path: RoutesNames.USER, element: User},
  {path: RoutesNames.PAGE_NOT_FOUND, element: PageNotFound}
];