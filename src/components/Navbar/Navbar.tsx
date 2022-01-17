import React from 'react';

import NavbarIcon from "./NavbarIcon";

import {Wrapper} from "./Navbar.styles";
import {BsSearch} from 'react-icons/bs';
import {FaUser} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
import {MdOutlineWatchLater} from "react-icons/md";
import logo from '../../assets/logo.png';
import {Link} from "react-router-dom";

const icons = [
  {path: '/search', icon: BsSearch},
  {path: '/favorite', icon: AiOutlineStar},
  {path: '/watch-later', icon: MdOutlineWatchLater},
  {path: '/user', icon: FaUser}
];

const Navbar = () => {
  const listOfIcons = icons.map(icon => (
    <NavbarIcon key={icon.path} to={icon.path} icon={<icon.icon/>}/>
  ));

  return (
    <Wrapper>
      <div className='navbar-container'>
        <h2><Link to='/'><img src={logo} alt='logo'/></Link></h2>
        {listOfIcons}
      </div>
    </Wrapper>
  );
};

export default Navbar;