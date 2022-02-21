import React, {FC} from 'react';

import {Wrapper} from "./Comment.styles";
import {IComment} from "../../types/IComment";

interface CommentProps {
  comment: IComment;
}

const Comment: FC<CommentProps> = ({comment}) => {
  return (
    <Wrapper>
      <div className='user'>
        <img src={comment.photoURL} alt='user'/>
        <p>{comment.displayName}</p>
      </div>
      <div className='text'>
        {comment.text}
      </div>
    </Wrapper>
  );
};

export default Comment;