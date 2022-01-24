import React, {FC} from 'react';

import {Wrapper} from "./NavbarIcon.styles";
import {NavLink} from "react-router-dom";

interface NavbarIcon {
  icon: React.ReactNode;
  to: string;
  onClick: () => void;
}

const NavbarIcon: FC<NavbarIcon> = ({icon, to, onClick}) => {
  return (
    <Wrapper>
      <NavLink to={to} className={({isActive}) => isActive ? 'active-link' : ''} onClick={onClick}>{icon}</NavLink>
    </Wrapper>
  );
};

export default NavbarIcon;