import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CommentsWrapper,
  Comment,
  CommentUser,
  CommentText,
  PostPageComment,
  PostPageCommentUser,
  PostPageCommentUserPic,
  PostPageCommentText,
} from "./CommentsWrapper.styles";

export const Comments = ({ comments, hideComments }: any) => {
  const slicedComments = comments?.slice(0, 2);
  const navigate = useNavigate();

  const onClickUsernameMoveToUserProfile = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    navigate(`/user/${event.currentTarget.id}`);
  };

  return (
    <CommentsWrapper>
      {!hideComments
        ? slicedComments?.map((comment: any) => {
            return (
              <Comment>
                <CommentUser
                  id={comment.uid}
                  onClick={onClickUsernameMoveToUserProfile}
                >
                  @{comment.username}
                </CommentUser>
                <CommentText>{comment.comment}</CommentText>
              </Comment>
            );
          })
        : comments?.map((comment: any) => {
            return (
              <PostPageComment>
                <PostPageCommentUserPic src={comment.profilePic} />
                <PostPageCommentUser
                  id={comment.uid}
                  onClick={onClickUsernameMoveToUserProfile}
                >
                  @{comment.username}
                </PostPageCommentUser>
                <PostPageCommentText>{comment.comment}</PostPageCommentText>
              </PostPageComment>
            );
          })}
    </CommentsWrapper>
  );
};
