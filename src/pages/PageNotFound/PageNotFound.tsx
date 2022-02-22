import React from 'react';

import StyledLink from "../../components/UI/StyledLink/StyledLink";

import {Wrapper} from "./PageNotFound.styles";

const PageNotFound = () => {
  return (
    <Wrapper>
      <h1>This page does not exist</h1>
      <StyledLink to='/' text='Home'/>
    </Wrapper>
  );
};

export default PageNotFound;