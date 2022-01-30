import React, {useState} from 'react';
import ReactDOM from "react-dom";

import NavbarIcon from "./NavbarIcon";
import {AiOutlineStar, BiLogIn, BiLogOut, BsSearch, MdOutlineWatchLater} from "../../common/react-icons/icons";
import {Link, useNavigate} from "react-router-dom";
import LoginForm from "../UI/LoginForm/LoginForm";

import {logout} from "../../common/firebase/auth";
import {useAppSelector} from "../../hooks/redux";
import {scrollToTop} from "../../helpers/scrollToTop";

import {Wrapper} from "./Navbar.styles";
import logo from '../../assets/images/logo.png';

const icons = [
  {path: '/favorite', icon: AiOutlineStar},
  {path: '/watch-later', icon: MdOutlineWatchLater},
];

const Navbar = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const {user} = useAppSelector(state => state.user);
  const navigate = useNavigate();

  const listOfIcons = icons.map(icon => (
    <NavbarIcon key={icon.path} to={icon.path} icon={<icon.icon/>} onClick={scrollToTop}/>
  ));

  const hideModal = () => {
    setIsLoginVisible(false);
  }

  const handleLogout = () => {
    navigate('/');
    logout();
  }

  return (
    <Wrapper>
      {isLoginVisible && ReactDOM.createPortal(<LoginForm
        hideModal={hideModal}/>, document.querySelector('#modal-root') as Element)}
      <div className='navbar-container'>
        <h2><Link to='/'><img src={logo} alt='logo'/></Link></h2>
        <NavbarIcon icon={<BsSearch/>} to={'/search'} onClick={scrollToTop}/>
        {user && listOfIcons}
        <div className='login-container'>
          {
            user
              ? (<button onClick={handleLogout}><BiLogOut/></button>)
              : (<button onClick={() => setIsLoginVisible(true)}><BiLogIn/></button>)
          }
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;