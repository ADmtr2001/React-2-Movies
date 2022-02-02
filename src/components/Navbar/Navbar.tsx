import React, {useState} from 'react';
import ReactDOM from "react-dom";

import NavbarIcon from "./NavbarIcon";
import {AiOutlineStar, BiLogIn, BiLogOut, BsSearch, MdOutlineWatchLater} from "../../common/react-icons/icons";
import {Link, useNavigate} from "react-router-dom";
import LoginForm from "../UI/LoginForm/LoginForm";

import {logout} from "../../common/firebase/auth";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {scrollToTop} from "../../helpers/scrollToTop";

import {Wrapper} from "./Navbar.styles";
import logo from '../../assets/images/logo.png';
import {setIsLoginVisible} from "../../store/reducers/global/globalSlice";

const icons = [
  {path: '/favorite', icon: AiOutlineStar},
  {path: '/watch-later', icon: MdOutlineWatchLater},
];

const Navbar = () => {
  const {isLoginVisible} = useAppSelector(state => state.global);
  const {user} = useAppSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const listOfIcons = icons.map(icon => (
    <NavbarIcon key={icon.path} to={icon.path} icon={<icon.icon/>} onClick={scrollToTop}/>
  ));

  const handleLogout = () => {
    navigate('/');
    logout();
  }

  const openModal = () => {
    dispatch(setIsLoginVisible(true));
  }

  return (
    <Wrapper>
      {isLoginVisible && ReactDOM.createPortal(<LoginForm/>, document.querySelector('#modal-root') as Element)}
      <div className='navbar-container'>
        <h2><Link to='/'><img src={logo} alt='logo'/></Link></h2>
        <NavbarIcon icon={<BsSearch/>} to={'/search'} onClick={scrollToTop}/>
        {user && listOfIcons}
        <div className='login-container'>
          {
            user
              ? (<button onClick={handleLogout}><BiLogOut/></button>)
              : (<button onClick={openModal}><BiLogIn/></button>)
          }
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;