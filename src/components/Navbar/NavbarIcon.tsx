import React, {FC} from 'react';

import {NavLink} from "react-router-dom";

import {Wrapper} from "./NavbarIcon.styles";

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