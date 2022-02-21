import React, {FC, useState} from 'react';

import {Wrapper} from "./CommentForm.styles";
import Button from "../UI/Button/Button";
import {addCommentToFilm} from "../../common/firebase/database";
import {Collection} from "../../types/IDatabase";
import {IComment} from "../../types/IComment";
import {generateId} from "../../helpers/generateId";
import {useAppSelector} from "../../hooks/redux";

interface CommentFormProps {
  filmId: string;
}

const CommentForm: FC<CommentFormProps> = ({filmId}) => {
  const [text, setText] = useState('');
  const {user} = useAppSelector(state => state.user);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) return;

    const comment: IComment = {
      commentId: generateId(),
      text: text,
      authorId: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    console.log(comment);
    addCommentToFilm(filmId, comment, Collection.Comments);
    setText('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <textarea onChange={handleInputChange} value={text} placeholder='Comment...'/>
      <Button width='9rem'>Send</Button>
    </Wrapper>
  );
};

export default CommentForm;