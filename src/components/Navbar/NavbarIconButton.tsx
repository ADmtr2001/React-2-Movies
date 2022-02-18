import React, {FC} from 'react';

import {Wrapper} from "./NavbarIconButton.styles";

interface NavbarIconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
}

const NavbarIconButton: FC<NavbarIconButtonProps> = ({icon, onClick}) => {
  return (
    <Wrapper onClick={onClick}>
      {icon}
    </Wrapper>
  );
};

export default NavbarIconButton;