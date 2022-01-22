import React, {useState} from 'react';

import NavbarIcon from "./NavbarIcon";

import {Wrapper} from "./Navbar.styles";
import {BsSearch} from 'react-icons/bs';
import {FaUser} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
import {MdOutlineWatchLater} from "react-icons/md";
import {BiLogIn, BiLogOut} from "react-icons/bi";
import logo from '../../assets/images/logo.png';
import {Link} from "react-router-dom";
import LoginForm from "../UI/LoginForm/LoginForm";
import ReactDOM from "react-dom";

import {logout} from "../../helpers/auth";
import {useAppSelector} from "../../hooks/redux";

const icons = [
  {path: '/favorite', icon: AiOutlineStar},
  {path: '/watch-later', icon: MdOutlineWatchLater},
  {path: '/user', icon: FaUser},
];

const Navbar = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const {user} = useAppSelector(state => state.user);

  const listOfIcons = icons.map(icon => (
    <NavbarIcon key={icon.path} to={icon.path} icon={<icon.icon/>}/>
  ));

  const hideModal = () => {
    setIsLoginVisible(false);
  }

  return (
    <Wrapper>
      {isLoginVisible && ReactDOM.createPortal(<LoginForm hideModal={hideModal}/>, document.querySelector('#modal-root') as Element)}
      <div className='navbar-container'>
        <h2><Link to='/'><img src={logo} alt='logo'/></Link></h2>
        <NavbarIcon icon={<BsSearch/>} to={'/search'}/>
        {user && listOfIcons}
        <div className='login-container'>
          <button>{user ? <BiLogOut onClick={logout}/> : <BiLogIn onClick={() => setIsLoginVisible(true)}/>}</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;