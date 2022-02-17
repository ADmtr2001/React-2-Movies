import React, {FC} from 'react';

import {Wrapper} from "./FilmActionButton.styles";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setIsLoginVisible} from "../../../store/reducers/global/globalSlice";

interface FilmActionButtonProps {
  active: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FilmActionButton: FC<FilmActionButtonProps> = ({onClick, children, active}) => {
  const {user} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(setIsLoginVisible(true));
  }

  return (
    <Wrapper onClick={user ? onClick : openModal} className={active ? 'active' : ''}>{children}</Wrapper>
  );
};

export default FilmActionButton;