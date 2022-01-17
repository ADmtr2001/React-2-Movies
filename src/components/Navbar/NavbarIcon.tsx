import React, {FC} from 'react';

import {Wrapper} from "./NavbarIcon.styles";
import {NavLink} from "react-router-dom";

interface NavbarIcon {
  icon: React.ReactNode;
  to: string;
}

const NavbarIcon: FC<NavbarIcon> = ({icon, to}) => {
  return (
    <Wrapper>
      <NavLink to={to} className={({isActive}) => isActive ? 'active-link' : ''}>{icon}</NavLink>
    </Wrapper>
  );
};

export default NavbarIcon;