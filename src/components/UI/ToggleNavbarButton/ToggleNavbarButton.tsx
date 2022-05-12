import React from 'react';

import NavbarIconButton from "../../Navbar/NavbarIconButton";

import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setIsNavbarVisible} from "../../../store/reducers/global/globalSlice";

import {Wrapper} from "./ToggleNavbarButton.styles";
import {AiOutlineMenu} from "../../../common/react-icons/icons";

const ToggleNavbarButton = () => {
  const {isNavbarVisible} = useAppSelector(state => state.global);

  const dispatch = useAppDispatch();

  const openNavbar = () => {
    dispatch(setIsNavbarVisible(true))
  }

  return (
    <Wrapper>
      {!isNavbarVisible && <div className='open'><NavbarIconButton icon={<AiOutlineMenu/>} onClick={openNavbar}/></div>}
    </Wrapper>
  );
};

export default ToggleNavbarButton;