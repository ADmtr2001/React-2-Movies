import React from 'react';

import {Wrapper} from "./PageNotFound.styles";
import StyledLink from "../../components/UI/StyledLink/StyledLink";

const PageNotFound = () => {
  return (
    <Wrapper>
      <h1>This page does not exist</h1>
      <StyledLink to='/' text={'Home'}></StyledLink>
    </Wrapper>
  );
};

export default PageNotFound;