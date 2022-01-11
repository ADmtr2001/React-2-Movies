import React from 'react';

import {BsSearch} from 'react-icons/bs';
import Search from "./Search";

import {Wrapper} from "./SearchForm.styles";

const SearchForm = () => {
  return (
    <Wrapper>
      <Search/>
      <button><BsSearch/></button>
    </Wrapper>
  );
};

export default SearchForm;