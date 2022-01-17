import React, {useState} from 'react';

import {Wrapper} from "./SearchForm.styles";
import {BsSearch} from 'react-icons/bs';
import {fetchAsyncMovies, fetchAsyncShows} from "../../../store/reducers/movie/MovieActionCreators";
import {useAppDispatch} from "../../../hooks/redux";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useAppDispatch();

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm.length === 0) return;

    dispatch(fetchAsyncMovies(searchTerm));
    dispatch(fetchAsyncShows(searchTerm));
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <div className='container'>
        <input value={searchTerm} onChange={handleInput}/>
        <button><BsSearch/></button>
      </div>
    </Wrapper>
  );
};

export default SearchForm;