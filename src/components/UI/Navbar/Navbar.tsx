import React from 'react';

import {BsSearch} from 'react-icons/bs';
import {FaUser} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai"
import logo from '../../../assets/logo.png';

import {Wrapper} from "./Navbar.styles";

import NavbarIcon from "./NavbarIcon";

const Navbar = () => {
  return (
    <Wrapper>
      <div className='navbar-content'>
        <h2><img src={logo} alt='logo'/></h2>
        <NavbarIcon icon={<FaUser/>}/>
        <NavbarIcon icon={<BsSearch/>}/>
        <NavbarIcon icon={<AiOutlineStar/>}/>
      </div>
    </Wrapper>
  );
};

export default Navbar;