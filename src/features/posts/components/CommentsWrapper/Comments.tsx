import { IComment } from "features/posts/types";
import uuid from "react-uuid";
import { Comment } from "./Comment";
import * as Styled from "./CommentsWrapper.styles";

export const Comments = ({ comments, hideComments }: any) => {
  const slicedComments = comments?.slice(0, 2);

  return (
    <Styled.CommentsWrapper>
      {!hideComments
        ? slicedComments?.map((comment: IComment) => {
            return (
              <Comment
                key={uuid()}
                hideComments={hideComments}
                uid={comment.uid}
                comment={comment.comment}
              />
            );
          })
        : comments?.map((comment: IComment) => {
            return (
              <Comment
                key={uuid()}
                hideComments={hideComments}
                uid={comment.uid}
                comment={comment.comment}
              />
            );
          })}
    </Styled.CommentsWrapper>
  );
};
