import React, {FC} from 'react';

import {Wrapper} from "./NavbarIcon.styles";

interface NavbarIcon {
  icon: React.ReactNode;
}

const NavbarIcon: FC<NavbarIcon> = ({icon}) => {
  return (
    <Wrapper>
      {icon}
    </Wrapper>
  );
};

export default NavbarIcon;