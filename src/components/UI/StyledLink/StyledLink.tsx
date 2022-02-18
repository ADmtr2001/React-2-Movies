import React, {FC, useContext} from 'react';

import {Link} from "react-router-dom";

import {Wrapper} from "./StyledLink.styles";
import {ThemeContext, useTheme} from "styled-components";

interface StyledLinkProps {
  text: string;
  to: string;
};

const StyledLink: FC<StyledLinkProps> = ({text, to}) => {
  return (
    <Wrapper>
      <Link to={to}>{text}</Link>
    </Wrapper>
  );
};

export default StyledLink;