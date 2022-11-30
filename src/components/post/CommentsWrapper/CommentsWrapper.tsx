import { AiOutlineSend } from "react-icons/ai";
import { IconContext } from "react-icons";
import { ChangeEvent, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "hooks/hooks";
import { IComment, ILike } from "types/post.types";
import { validateComment } from "features/validation/comment.validation";
import { ILikesModalProps } from "types/likesModal.types";
import { RootState } from "../../../store/store";
import { addCommentAction } from "../../../store/actions/postActions";
import { Comments } from "./Comments";
import {
  Wrapper,
  LikesCount,
  ButtonViewComments,
  AddCommentWrapper,
  ButtonAddComment,
  CommentInput,
} from "./CommentsWrapper.styles";

interface ICommentsWrapperProps extends ILikesModalProps {
  likes: ILike[];
  comments: IComment[];
  id: string | undefined;
  hideComments: boolean;
  postUid: string;
}

export const CommentsWrapper = ({
  likes,
  comments,
  id,
  postUid,
  hideComments,
  onClickShowModalLikes,
}: ICommentsWrapperProps) => {
  const [newComment, setNewComment] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { uid } = useSelector(
    (state: RootState) => state.rootReducer.currentUser
  );

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const onClickLikesCount = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClickShowModalLikes!(event.currentTarget.id);
  };

  const onClickViewComments = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/post/${event.currentTarget.id}`);
  };

  const onClickAddComment = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (validateComment(newComment)) {
      dispatch(
        addCommentAction(postUid, uid, event.currentTarget.id, newComment)
      );
      setNewComment("");
    }
  };

  const IconValue = useMemo(
    () => ({
      size: "20px",
    }),
    []
  );

  return (
    <Wrapper>
      <LikesCount onClick={onClickLikesCount} id={id}>
        {likes?.length} likes
      </LikesCount>
      {!hideComments && (
        <ButtonViewComments onClick={onClickViewComments} id={id}>
          View All Comments
        </ButtonViewComments>
      )}
      <hr />
      {!hideComments && <Comments comments={comments} />}
      <AddCommentWrapper>
        <CommentInput
          placeholder="Add a comment.."
          onChange={onChange}
          value={newComment}
        />
        <ButtonAddComment id={id} onClick={onClickAddComment}>
          <IconContext.Provider value={IconValue}>
            <AiOutlineSend />
          </IconContext.Provider>
        </ButtonAddComment>
      </AddCommentWrapper>
    </Wrapper>
  );
};
