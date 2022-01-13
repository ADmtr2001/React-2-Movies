import React from 'react';

import {BsSearch} from 'react-icons/bs';
import {FaUser} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
import {MdOutlineWatchLater} from "react-icons/md";
import logo from '../../../assets/logo.png';

import {Wrapper} from "./Navbar.styles";

import NavbarIcon from "./NavbarIcon";

const Navbar = () => {
  return (
    <Wrapper>
      <div className='navbar-content'>
        <h2><img src={logo} alt='logo'/></h2>
        <NavbarIcon icon={<BsSearch/>}/>
        <NavbarIcon icon={<AiOutlineStar/>}/>
        <NavbarIcon icon={<MdOutlineWatchLater/>}/>
        <NavbarIcon icon={<FaUser/>}/>
      </div>
    </Wrapper>
  );
};

export default Navbar;