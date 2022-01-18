import React, {useState} from 'react';

import NavbarIcon from "./NavbarIcon";

import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";

import {Wrapper} from "./Navbar.styles";
import {BsSearch} from 'react-icons/bs';
import {FaUser} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
import {MdOutlineWatchLater} from "react-icons/md";
import {BiLogIn, BiLogOut} from "react-icons/bi";
import logo from '../../assets/logo.png';
import {Link} from "react-router-dom";
import LoginForm from "../UI/LoginForm/LoginForm";
import ReactDOM from "react-dom";

import {auth} from "../../common/firebase/firebase-config";
import firebase from "firebase/compat";

const icons = [
  {path: '/favorite', icon: AiOutlineStar},
  {path: '/watch-later', icon: MdOutlineWatchLater},
  {path: '/user', icon: FaUser},
];

const Navbar = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [user, setUser] = useState<any>(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const listOfIcons = icons.map(icon => (
    <NavbarIcon key={icon.path} to={icon.path} icon={<icon.icon/>}/>
  ));

  const register = async (email: string, password: string) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch(e: any) {
      console.log(e.message);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
    } catch(e: any) {
      console.log(e.message);
    }
  }

  const logout = async () => {
    await signOut(auth);
  }

  const hideModal = () => {
    setIsLoginVisible(false);
  }

  return (
    <Wrapper>
      {isLoginVisible && ReactDOM.createPortal(<LoginForm register={register} login={login} hideModal={hideModal}/>, document.querySelector('#modal-root') as Element)}
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