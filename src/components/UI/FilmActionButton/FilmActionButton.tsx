import React, {FC} from 'react';

import {Wrapper} from "./FilmActionButton.styles";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setIsLoginVisible} from "../../../store/reducers/global/globalSlice";
import {addFilmToCategory} from "../../../common/firebase/database";
import {IUser} from "../../../types/IUser";

interface FilmActionButtonProps {
  active: boolean;
  onClick: (user: IUser) => void;
}

const FilmActionButton: FC<FilmActionButtonProps> = ({onClick, children, active}) => {
  const {user} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(setIsLoginVisible(true));
  }

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
    <Wrapper onClick={handleClick} className={active ? 'active' : ''}>{children}</Wrapper>
  );
};

export default FilmActionButton;