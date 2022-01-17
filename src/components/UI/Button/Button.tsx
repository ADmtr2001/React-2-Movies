import React, {FC} from 'react';

import {Wrapper} from "./Button.styles";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <Wrapper {...props}/>
  );
};

export default Button;