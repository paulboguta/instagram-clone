import { ChangeEvent } from "react";
import { CommentInputStyled } from "./CommentsWrapper.styles";

interface ICommentInput {
  newComment: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CommentInput = ({ newComment, onChange }: ICommentInput) => {
  return (
    <CommentInputStyled
      placeholder="Add a comment.."
      onChange={onChange}
      value={newComment}
    />
  );
};
