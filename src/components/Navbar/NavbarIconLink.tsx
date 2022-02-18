import React, {FC} from 'react';

import {NavLink} from "react-router-dom";

import {Wrapper} from "./NavbarIconLink.styles";

interface NavbarIconLinkProps {
  icon: React.ReactNode;
  to: string;
  onClick: () => void;
}

const NavbarIconLink: FC<NavbarIconLinkProps> = ({icon, to, onClick}) => {
  return (
    <Wrapper>
      <NavLink to={to} className={({isActive}) => isActive ? 'active-link' : ''} onClick={onClick}>{icon}</NavLink>
    </Wrapper>
  );
};

export default NavbarIconLink;