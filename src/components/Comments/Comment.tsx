import React, {FC} from 'react';

import {Wrapper} from "./Comment.styles";
import {IComment} from "../../types/IComment";
import {AiTwotoneDelete} from "../../common/react-icons/icons";

interface CommentProps {
  comment: IComment;
  onClick: (filmId: string) => void;
}

const Comment: FC<CommentProps> = ({comment, onClick}) => {
  return (
    <Wrapper>
      <div className='user'>
        <img src={comment.photoURL} alt='user'/>
        <p>{comment.displayName}</p>
      </div>
      <div className='text'>
        {comment.text}
        <div className='remove-button' onClick={() => onClick(comment.commentId)}><AiTwotoneDelete/></div>
      </div>
    </Wrapper>
  );
};

export default Comment;