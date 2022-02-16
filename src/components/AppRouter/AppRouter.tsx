import React from 'react';

import {Route, Routes} from "react-router-dom";

import {useAppSelector} from "../../hooks/redux";
import {privateRoutes, publicRoutes} from "../../router";

const AppRouter = () => {
  let {user} = useAppSelector(state => state.user);

  if (!user) {
    if (localStorage.getItem('user')) {
      user = {uid: '123'};
    }
  }

  return (
    <Routes>
      {
        user
          ? (
            privateRoutes.map(route => (
              <Route key={route.path} path={route.path} element={<route.element/>}/>
            ))
          )
          : (
            publicRoutes.map(route => (
              <Route key={route.path} path={route.path} element={<route.element/>}/>
            ))
          )
      }
    </Routes>
  );
};

export default AppRouter;