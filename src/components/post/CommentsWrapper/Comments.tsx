import { CommentsWrapper } from "./CommentsWrapper.styles";
import { Comment } from "./Comment";

export const Comments = ({ comments, hideComments }: any) => {
  const slicedComments = comments?.slice(0, 2);

  return (
    <CommentsWrapper>
      {!hideComments
        ? slicedComments?.map((comment: any) => {
            return (
              <Comment
                hideComments={hideComments}
                uid={comment.uid}
                comment={comment.comment}
              />
            );
          })
        : comments?.map((comment: any) => {
            return (
              <Comment
                hideComments={hideComments}
                uid={comment.uid}
                comment={comment.comment}
              />
            );
          })}
    </CommentsWrapper>
  );
};
