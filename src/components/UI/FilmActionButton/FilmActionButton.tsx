import React, {FC} from 'react';

import {Wrapper} from "./FilmActionButton.styles";

const FilmActionButton: FC = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default FilmActionButton;