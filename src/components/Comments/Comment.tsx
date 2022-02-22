import React, {FC} from 'react';

import {Wrapper} from "./Comment.styles";
import {AiTwotoneDelete} from "../../common/react-icons/icons";

import {IComment} from "../../types/IComment";

interface CommentProps {
  comment: IComment;
  isDeletable: boolean;
  onClick: (filmId: string) => void;
}

const Comment: FC<CommentProps> = ({comment, onClick, isDeletable}) => {
  return (
    <Wrapper>
      <div className='user'>
        <img src={comment.photoURL} alt='user'/>
        <p>{comment.displayName}</p>
      </div>
      <div className='text'>
        {comment.text}
        {isDeletable && <div className='remove-button' onClick={() => onClick(comment.commentId)}><AiTwotoneDelete/></div>}
      </div>
    </Wrapper>
  );
};

export default Comment;