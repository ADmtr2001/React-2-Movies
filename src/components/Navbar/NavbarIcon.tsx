import React, {FC} from 'react';

import {Wrapper} from "./NavbarIcon.styles";
import {Link} from "react-router-dom";

interface NavbarIcon {
  icon: React.ReactNode;
  to: string;
}

const NavbarIcon: FC<NavbarIcon> = ({icon, to}) => {
  return (
    <Wrapper>
      <Link to={to}>{icon}</Link>
    </Wrapper>
  );
};

export default NavbarIcon;