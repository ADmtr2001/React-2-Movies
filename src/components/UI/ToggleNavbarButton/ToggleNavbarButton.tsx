import React from 'react';

import {Wrapper} from "./ToggleNavbarButton.styles";
import NavbarIconButton from "../../Navbar/NavbarIconButton";
import {AiOutlineMenu} from "../../../common/react-icons/icons";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setIsNavbarVisible} from "../../../store/reducers/global/globalSlice";

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