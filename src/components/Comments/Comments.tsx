import React, {FC} from 'react';

import {Wrapper} from "./Comments.styles";
import Comment from "./Comment";
import {useAppSelector} from "../../hooks/redux";
import CommentForm from "./CommentForm";
import {IComment} from "../../types/IComment";

interface CommentsProps {
  filmId: string;
  comments: IComment[];
}

const Comments: FC<CommentsProps> = ({filmId, comments}) => {
  const commentsList = comments.map((comment) => <Comment key={comment.commentId} comment={comment}/>)

  return (
    <Wrapper>
      <CommentForm filmId={filmId}/>
      {commentsList}
    </Wrapper>
  );
};

export default Comments;