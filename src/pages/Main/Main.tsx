import React from 'react';

import RecommendedMovie from "../../components/RecommendedMovie/RecommendedMovie";
import Home from "../../components/Home/Home";

import {Wrapper} from "./Main.styles";

const Main = () => {
  return (
    <Wrapper>
      <RecommendedMovie/>
      <Home/>
    </Wrapper>
  );
};

export default Main;