import { validateComment } from "features/posts/utils/comment.validation";
import { useAppDispatch } from "store/store";
import { ChangeEvent, useMemo, useState } from "react";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import { AiOutlineSend } from "react-icons/ai";
import styled from "styled-components";
import { selectCurrentUser } from "features/user/store/currentUserSlice";
import { addComment } from "features/posts/store/postsSlice";
import { addCommentService } from "features/posts/services/comments.service";
import { CommentInput } from "./CommentInput";
import { ButtonAddComment } from "./CommentsWrapper.styles";

interface ICommentAdd {
  postUid: string;
  id: string | undefined;
}

const AddCommentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-inline: 8px;
  margin-top: 6px;
  padding-bottom: 16px;
`;

export const CommentAdd = ({ postUid, id }: ICommentAdd) => {
  const [newComment, setNewComment] = useState("");
  const dispatch = useAppDispatch();

  const { uid } = useSelector(selectCurrentUser);

  const onClickAddComment = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const thisID = event.currentTarget.id;
    if (validateComment(newComment)) {
      const newCommentsArray = await addCommentService(
        postUid,
        uid,
        thisID,
        newComment
      );
      dispatch(addComment({ comments: newCommentsArray, id: thisID }));
      setNewComment("");
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const IconValue = useMemo(
    () => ({
      size: "20px",
    }),
    []
  );

  return (
    <AddCommentWrapper>
      <CommentInput onChange={onChange} newComment={newComment} />
      <ButtonAddComment id={id} onClick={onClickAddComment}>
        <IconContext.Provider value={IconValue}>
          <AiOutlineSend />
        </IconContext.Provider>
      </ButtonAddComment>
    </AddCommentWrapper>
  );
};
