import React, {FC, useState} from 'react';

import Button from "../UI/Button/Button";

import {addCommentToFilm} from "../../common/firebase/database";
import {generateId} from "../../helpers/generateId";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setIsLoginVisible} from "../../store/reducers/global/globalSlice";

import {Wrapper} from "./CommentForm.styles";

import {Collection} from "../../types/IDatabase";
import {IComment} from "../../types/IComment";

interface CommentFormProps {
  filmId: string;
}

const CommentForm: FC<CommentFormProps> = ({filmId}) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const {user} = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      dispatch(setIsLoginVisible(true));
      return;
    }

    if (text.length < 6) {
      setError('Comment must be more than 5 characters!');
      return;
    }

    const comment: IComment = {
      commentId: generateId(),
      text: text,
      authorId: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    addCommentToFilm(filmId, comment, Collection.Comments);
    setText('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setError('');
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <textarea onChange={handleInputChange} value={text} placeholder='Comment...'/>
      {error && <p className='error-message'>{error}</p>}
      <Button width='9rem'>Send</Button>
    </Wrapper>
  );
};

export default CommentForm;