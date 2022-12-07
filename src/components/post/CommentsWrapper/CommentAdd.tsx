import { validateComment } from "features/validation/comment.validation";
import { useAppDispatch } from "hooks/hooks";
import { ChangeEvent, useMemo, useState } from "react";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import { addCommentAction } from "store/actions/postActions";
import { AiOutlineSend } from "react-icons/ai";
import styled from "styled-components";
import { selectCurrentUser } from "user/store/slices/currentUserSlice";
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

  const onClickAddComment = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (validateComment(newComment)) {
      dispatch(
        addCommentAction(postUid, uid, event.currentTarget.id, newComment)
      );
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
