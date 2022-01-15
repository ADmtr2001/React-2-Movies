import React, {FC} from 'react';

import {Link} from "react-router-dom";

import {Wrapper} from "./StyledLink.styles";

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