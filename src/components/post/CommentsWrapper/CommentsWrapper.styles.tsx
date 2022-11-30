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
export const LikesCount = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
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

export const CommentsWrapper = styled.div`
  display: flex;
  gap: 7px;
  flex-direction: column;
  overflow-y: auto;
`;

export const CommentStyled = styled.div`
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

export const PostPageComment = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 10px;
`;

export const PostPageCommentUserPic = styled.img`
  height: 30px;
  border-radius: 50%;
  background-color: #dcbae7;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(220, 186, 231, 1);
  -moz-box-shadow: 0px 0px 6px 0px rgba(220, 186, 231, 1);
  box-shadow: 0px 0px 6px 0px rgba(220, 186, 231, 1);
`;
export const PostPageCommentUser = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.fontPrimary};
`;
export const PostPageCommentText = styled.div`
  color: ${(props) => props.theme.fontSecondary};
  font-size: 12px;
  font-weight: 300;
`;
