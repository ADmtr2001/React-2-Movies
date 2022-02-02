import React, {FC} from 'react';

import {Wrapper} from "./FilmActionButton.styles";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setIsLoginVisible} from "../../../store/reducers/global/globalSlice";

interface FilmActionButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FilmActionButton: FC<FilmActionButtonProps> = ({onClick, children}) => {
  const {user} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(setIsLoginVisible(true));
  }

  return (
    <Wrapper onClick={user ? onClick : openModal}>{children}</Wrapper>
  );
};

export default FilmActionButton;