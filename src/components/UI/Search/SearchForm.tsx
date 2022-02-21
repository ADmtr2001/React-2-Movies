import React, {forwardRef, useState} from 'react';

import {BsSearch} from 'react-icons/bs';

import {useAppDispatch} from "../../../hooks/redux";
import {fetchAsyncMovies, fetchAsyncShows} from "../../../store/reducers/movie/movieActionCreators";

import {Wrapper} from "./SearchForm.styles";

const SearchForm = forwardRef((props, ref: React.Ref<HTMLInputElement>) => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useAppDispatch();

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm.length === 0) return;

    dispatch(fetchAsyncMovies(searchTerm));
    dispatch(fetchAsyncShows(searchTerm));
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <div className='container'>
        <input value={searchTerm} ref={ref} onChange={handleInputChange}/>
        <button><BsSearch/></button>
      </div>
    </Wrapper>
  );
});

export default SearchForm;