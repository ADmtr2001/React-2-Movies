import React, {FC} from 'react';

import {Wrapper} from "./Comments.styles";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import {IComment} from "../../types/IComment";
import {removeFilmComment} from "../../common/firebase/database";
import {Collection} from "../../types/IDatabase";

interface CommentsProps {
  filmId: string;
  comments: IComment[];
}

const Comments: FC<CommentsProps> = ({filmId, comments}) => {
  const handleClick = (commentId: string) => {
    removeFilmComment(filmId, commentId, Collection.Comments);
  }

  const commentsList = comments.map((comment) => <Comment key={comment.commentId} comment={comment} onClick={handleClick}/>)

  return (
    <Wrapper>
      <CommentForm filmId={filmId}/>
      {commentsList}
    </Wrapper>
  );
};

export default Comments;