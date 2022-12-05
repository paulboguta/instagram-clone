import { ChangeEvent } from "react";
import styled from "styled-components";

interface ICommentInput {
  newComment: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const CommentInputStyled = styled.input`
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.fontPrimary};
  border: none;
  outline: none;
`;

export const CommentInput = ({ newComment, onChange }: ICommentInput) => {
  return (
    <CommentInputStyled
      placeholder="Add a comment.."
      onChange={onChange}
      value={newComment}
    />
  );
};
