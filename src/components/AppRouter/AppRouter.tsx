import React from 'react';

import {Route, Routes} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {privateRoutes, publicRoutes} from "../../router";
import {setUser} from "../../store/reducers/user/userSlice";

const AppRouter = () => {
  let {user} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  if (!user) {
    if (localStorage.getItem('user')) {
      dispatch(setUser({uid: 'template', photoURL: 'template', displayName: 'template'}));
    }
  }

  let routes: React.ReactNode;
  if (user) {
    routes = privateRoutes.map(route => (
      <Route key={route.path} path={route.path} element={<route.element/>}/>
    ))
  } else {
    routes = publicRoutes.map(route => (
      <Route key={route.path} path={route.path} element={<route.element/>}/>
    ))
  }

  return (
    <Routes>
      {routes}
    </Routes>
  );
};

export default AppRouter;