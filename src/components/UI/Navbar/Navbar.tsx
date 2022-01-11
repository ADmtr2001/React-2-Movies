import React from 'react';

import {BsFilm} from 'react-icons/bs';

import {Wrapper} from "./Navbar.styles";
import User from "../User/User";
import SearchForm from "../Search/SearchForm";

const Navbar = () => {
  return (
    <Wrapper>
      <h2>Vilm <BsFilm/></h2>
      <SearchForm/>
      <User/>
    </Wrapper>
  );
};

export default Navbar;