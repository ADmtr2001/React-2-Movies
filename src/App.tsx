import React from "react";

import {Wrapper} from './App.styles';
import Navbar from "./components/UI/Navbar/Navbar";
import RecommendedMovie from "./components/UI/RecommendedMovie/RecommendedMovie";

const App = () => {
  return(
  <Wrapper>
    <Navbar/>
    <RecommendedMovie/>
  </Wrapper>
  );
};

export default App;
