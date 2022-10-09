import styled from "styled-components";
import { ButtonLike } from "../PostButtonsComments/PostButtonsComments.styles";

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 8px;
  background-color: ${(props) => props.theme.backgroundPrimary};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  hr {
    opacity: 0.5;
    width: 98%;
  }
`;
export const LikesCount = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 6px;
  color: ${(props) => props.theme.fontPrimary};
`;

export const AddCommentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-inline: 8px;
  margin-top: 6px;
  padding-bottom: 16px;
`;

export const CommentInput = styled.input`
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

export const ButtonViewComments = styled(ButtonLike)`
  color: ${(props) => props.theme.fontSecondary};
  margin-bottom: 6px;
`;

export const ButtonAddComment = styled(ButtonLike)`
  color: ${(props) => props.theme.fontPrimary};
`;

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CommentUser = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.fontPrimary};
`;
export const CommentText = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.fontPrimary};
`;
