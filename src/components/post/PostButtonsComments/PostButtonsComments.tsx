import { IconContext } from "react-icons";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useAppDispatch } from "hooks/hooks";
import { useSelector } from "react-redux";
import { IComment, ILike } from "types/post.types";
import { useMemo } from "react";
import {
  ButtonsLikeCommentWrapper,
  ButtonLike,
  BoxShadow,
} from "./PostButtonsComments.styles";
import { CommentsWrapper } from "../CommentsWrapper/CommentsWrapper";
import { RootState } from "../../../store/store";
import { likePostAction, unlikePost } from "../../../store/actions/postActions";

interface IPostButtonsCommentsProps {
  likes: ILike[];
  comments: IComment[];
  id: string | undefined;
  isLiked: boolean;
  hideComments: boolean;
  postUid: string;
}

export const PostButtonsComments = ({
  likes,
  comments,
  id,
  isLiked,
  hideComments,
  postUid,
}: IPostButtonsCommentsProps) => {
  const dispatch = useAppDispatch();
  const currentUser = useSelector(
    (state: RootState) => state.rootReducer.currentUser
  );

  const onClickLike = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(likePostAction(currentUser.uid, event.currentTarget.id));
  };

  const onClickUnlike = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(unlikePost(currentUser.uid, event.currentTarget.id));
  };

  const IconValue = useMemo(
    () => ({
      size: "22px",
    }),
    []
  );

  return (
    <BoxShadow hideComments={hideComments}>
      <ButtonsLikeCommentWrapper>
        <IconContext.Provider value={IconValue}>
          {!isLiked && (
            <ButtonLike id={id} onClick={onClickLike}>
              <AiOutlineHeart />
            </ButtonLike>
          )}
          {isLiked && (
            <ButtonLike id={id} onClick={onClickUnlike}>
              <AiFillHeart />
            </ButtonLike>
          )}
        </IconContext.Provider>
      </ButtonsLikeCommentWrapper>
      <CommentsWrapper
        likes={likes}
        comments={comments}
        id={id}
        hideComments={hideComments}
        postUid={postUid}
      />
    </BoxShadow>
  );
};
