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
import { ChangeEvent, useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../../../store/hooks";
import { addComment } from "../../../store/actions/postActions";
import { useSelector } from "react-redux";
import { collectionGroup, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../services/firebase";

interface ICommentsWrapperProps {
  likes: any[];
  comments: any[];
  id?: string | undefined;
  clickHandler(): void;
}

export const CommentsWrapper = ({
  likes,
  comments,
  id,
  clickHandler,
}: ICommentsWrapperProps) => {
  const likesCount = likes.length;
  const [newComment, setNewComment] = useState("");
  const dispatch = useAppDispatch();
  const currentUser = useSelector(
    (state: RootState) => state.rootReducer.currentUser
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const onClickAddComment = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (newComment.length < 2 || newComment.length > 20) {
      alert(
        "Comment has to be at least 2 characters and maximum 20 characters"
      );
    } else {
      dispatch(addComment(currentUser.uid, event.currentTarget.id, newComment));
      setNewComment("");
      clickHandler();
    }
  };

  // display only first 2 comments so slice comments arr
  const slicedComments = comments.slice(0, 2);

  return (
    <Wrapper>
      <LikesCount>{likesCount} likes</LikesCount>
      <ButtonViewComments>View All Comments</ButtonViewComments>
      <hr />
      <Comments>
        {slicedComments.map((comment) => {
          return (
            <Comment>
              <CommentUser>@{comment.username}</CommentUser>
              <CommentText>{comment.comment}</CommentText>
            </Comment>
          );
        })}
      </Comments>
      <AddCommentWrapper>
        <CommentInput
          placeholder="Add a comment.."
          onChange={onChange}
          value={newComment}
        />
        <ButtonAddComment id={id} onClick={onClickAddComment}>
          <IconContext.Provider value={{ size: "20px" }}>
            <AiOutlineSend />
          </IconContext.Provider>
        </ButtonAddComment>
      </AddCommentWrapper>
    </Wrapper>
  );
};
