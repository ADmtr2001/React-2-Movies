import React, {FC} from 'react';

import {Wrapper} from "./FilmActionButton.styles";

interface FilmActionButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FilmActionButton: FC<FilmActionButtonProps> = (props) => {
  return (
    <Wrapper {...props}/>
  );
};

export default FilmActionButton;