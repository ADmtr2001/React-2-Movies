import React from 'react';

import Search from "./Search";

import {Wrapper} from "./SearchForm.styles";
import {BsSearch} from 'react-icons/bs';

const SearchForm = () => {
  return (
    <Wrapper>
      <Search/>
      <button><BsSearch/></button>
    </Wrapper>
  );
};

export default SearchForm;