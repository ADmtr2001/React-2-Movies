import React, {FC} from 'react';

import {Wrapper} from "./Button.styles";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean | undefined;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  hoverColor?: string;
  hoverBackground?: string;
  width?: string;
  height?: string;
  className?: string;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <Wrapper {...props}/>
  );
};

export default Button;