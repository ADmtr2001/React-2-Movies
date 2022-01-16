import React from 'react';

import NavbarIcon from "./NavbarIcon";

import {Wrapper} from "./Navbar.styles";
import {BsSearch} from 'react-icons/bs';
import {FaUser} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
import {MdOutlineWatchLater} from "react-icons/md";
import logo from '../../assets/logo.png';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <div className='navbar-container'>
        <h2><Link to='/'><img src={logo} alt='logo'/></Link></h2>
        <NavbarIcon to='/search' icon={<BsSearch/>}/>
        <NavbarIcon to='/favorite' icon={<AiOutlineStar/>}/>
        <NavbarIcon to='/watch-later' icon={<MdOutlineWatchLater/>}/>
        <NavbarIcon to='/user' icon={<FaUser/>}/>
      </div>
    </Wrapper>
  );
};

export default Navbar;