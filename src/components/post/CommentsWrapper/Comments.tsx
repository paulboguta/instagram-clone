import { IComment } from "types/post.types";
import { CommentsWrapper } from "./CommentsWrapper.styles";
import { Comment } from "./Comment";

export const Comments = ({ comments, hideComments }: any) => {
  const slicedComments = comments?.slice(0, 2);

  return (
    <CommentsWrapper>
      {!hideComments
        ? slicedComments?.map((comment: IComment) => {
            return (
              <Comment
                key={comment.uid}
                hideComments={hideComments}
                uid={comment.uid}
                comment={comment.comment}
              />
            );
          })
        : comments?.map((comment: IComment) => {
            return (
              <Comment
                key={comment.uid}
                hideComments={hideComments}
                uid={comment.uid}
                comment={comment.comment}
              />
            );
          })}
    </CommentsWrapper>
  );
};
