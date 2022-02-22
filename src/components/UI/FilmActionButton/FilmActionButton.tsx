import React, {FC} from 'react';

import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setIsLoginVisible} from "../../../store/reducers/global/globalSlice";

import {Wrapper} from "./FilmActionButton.styles";

import {IUser} from "../../../types/IUser";

interface FilmActionButtonProps {
  active: boolean;
  width?: string;
  onClick: (user: IUser) => void;
}

const FilmActionButton: FC<FilmActionButtonProps> = ({active, width, onClick, children}) => {
  const {user} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      dispatch(setIsLoginVisible(true));
      return;
    }

    onClick(user);
  }

  return (
    <Wrapper onClick={handleClick} className={active ? 'active' : ''} width={width}>{children}</Wrapper>
  );
};

export default FilmActionButton;