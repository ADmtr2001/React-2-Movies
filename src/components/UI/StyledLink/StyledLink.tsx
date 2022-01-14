import React from 'react';

import {Link} from "react-router-dom";

import {Wrapper} from "./StyledLink.styles";

const StyledLink = () => {
  return (
    <Wrapper>
      <Link to={'/'}>Film Page</Link>
    </Wrapper>
  );
};

export default StyledLink;