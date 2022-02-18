import React, {FC, useState} from 'react';
import ReactDOM from "react-dom";

import NavbarIconLink from "./NavbarIconLink";
import {AiOutlineStar, BiLogIn, BiLogOut, BsSearch, MdOutlineWatchLater, AiOutlineHome, BsMoonStars, BsSun} from "../../common/react-icons/icons";
import {Link, useNavigate} from "react-router-dom";
import LoginForm from "../UI/LoginForm/LoginForm";

import {logout} from "../../common/firebase/auth";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {scrollToTop} from "../../helpers/scrollToTop";

import {Wrapper} from "./Navbar.styles";
import logo from '../../assets/images/logo.png';
import {setIsLoginVisible} from "../../store/reducers/global/globalSlice";
import {setFavoriteMovies, setWatchLaterMovies} from "../../store/reducers/user/userSlice";
import NavbarIconButton from "./NavbarIconButton";

const publicIcons = [
  {path: '/', icon: AiOutlineHome},
  {path: '/search', icon: BsSearch},
]

const privateIcons = [
  {path: '/favorite', icon: AiOutlineStar},
  {path: '/watch-later', icon: MdOutlineWatchLater},
];

interface NavbarProps {
  changeTheme: () => void;
  isDark: boolean;
}

const Navbar: FC<NavbarProps> = ({changeTheme, isDark}) => {
  const {isLoginVisible} = useAppSelector(state => state.global);
  const {user} = useAppSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const listOfPublicIcons = publicIcons.map(icon => (
    <NavbarIconLink key={icon.path} to={icon.path} icon={<icon.icon/>} onClick={scrollToTop}/>
  ));

  const listOfPrivateIcons = privateIcons.map(icon => (
    <NavbarIconLink key={icon.path} to={icon.path} icon={<icon.icon/>} onClick={scrollToTop}/>
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
        {listOfPublicIcons}
        {user && listOfPrivateIcons}
        <div className='login-container'>
          <NavbarIconButton onClick={changeTheme} icon={isDark ? <BsSun/> : <BsMoonStars/>}/>
          {
            user
              ? (<NavbarIconButton onClick={handleLogout} icon={<BiLogOut/>}/>)
              : (<NavbarIconButton onClick={openModal} icon={<BiLogIn/>}/>)
          }
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;