import {
  Wrapper,
  LikesCount,
  ButtonViewComments,
  AddCommentWrapper,
  ButtonAddComment,
  CommentInput,
  Comments,
  Comment,
  CommentUser,
  CommentText,
} from "./CommentsWrapper.styles";

import { AiOutlineSend } from "react-icons/ai";
import { IconContext } from "react-icons";

interface ICommentsWrapperProps {
  likes: string[];
  comments: string[];
}

export const CommentsWrapper = ({ likes, comments }: ICommentsWrapperProps) => {
  const likesCount = likes.length;
  return (
    <Wrapper>
      <LikesCount>{likesCount} likes</LikesCount>
      <ButtonViewComments>View All Comments</ButtonViewComments>
      <hr />
      <Comments>
        <Comment>
          <CommentUser>@pawelboguta</CommentUser>
          <CommentText>Soon gonna style it dw!</CommentText>
        </Comment>
      </Comments>
      <AddCommentWrapper>
        <CommentInput placeholder="Add a comment.." />
        <ButtonAddComment>
          <IconContext.Provider value={{ size: "20px" }}>
            <AiOutlineSend />
          </IconContext.Provider>
        </ButtonAddComment>
      </AddCommentWrapper>
    </Wrapper>
  );
};
