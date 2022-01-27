import React from "react";

export enum RoutesNames {
  MAIN = '/',
  SEARCH = '/search',
  FAVORITE = '/favorite',
  WATCH_LATER = '/watch-later',
  USER = '/user',
  MOVIE = '/movie/:id',
  PAGE_NOT_FOUND = '*'
};

export interface IRoute {
  path: RoutesNames;
  element: React.ComponentType;
}