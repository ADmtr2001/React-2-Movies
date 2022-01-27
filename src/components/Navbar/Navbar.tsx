import React, {useState} from 'react';
import ReactDOM from "react-dom";

import NavbarIcon from "./NavbarIcon";
import {AiOutlineStar, BiLogIn, BiLogOut, BsSearch, FaUser, MdOutlineWatchLater} from "../../common/react-icons/icons";
import {Link} from "react-router-dom";
import LoginForm from "../UI/LoginForm/LoginForm";

import {logout} from "../../common/firebase/auth";
import {useAppSelector} from "../../hooks/redux";
import {scrollToTop} from "../../helpers/scrollToTop";

import {Wrapper} from "./Navbar.styles";
import logo from '../../assets/images/logo.png';

const icons = [
  {path: '/favorite', icon: AiOutlineStar},
  {path: '/watch-later', icon: MdOutlineWatchLater},
  {path: '/user', icon: FaUser},
];

const Navbar = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const {user} = useAppSelector(state => state.user);

  const listOfIcons = icons.map(icon => (
    <NavbarIcon key={icon.path} to={icon.path} icon={<icon.icon/>} onClick={scrollToTop}/>
  ));

  const hideModal = () => {
    setIsLoginVisible(false);
  }

  return (
    <Wrapper>
      {isLoginVisible && ReactDOM.createPortal(<LoginForm hideModal={hideModal}/>, document.querySelector('#modal-root') as Element)}
      <div className='navbar-container'>
        <h2><Link to='/'><img src={logo} alt='logo'/></Link></h2>
        <NavbarIcon icon={<BsSearch/>} to={'/search'} onClick={scrollToTop}/>
        {user && listOfIcons}
        <div className='login-container'>
          <button>{user ? <BiLogOut onClick={logout}/> : <BiLogIn onClick={() => setIsLoginVisible(true)}/>}</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;