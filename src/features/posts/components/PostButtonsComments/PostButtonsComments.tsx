import { IconContext } from "react-icons";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useAppDispatch } from "store/store";
import { useSelector } from "react-redux";
import { IComment, ILike } from "features/posts/types";
import { useMemo } from "react";
import { ILikesModalProps } from "types/likesModal.types";
import { selectCurrentUser } from "features/user/store/currentUserSlice";
import { doLike, doUnlike } from "features/posts/services/likes.service";
import { updatePostLikes } from "features/posts/store/postsSlice";
import { CommentsWrapper } from "../CommentsWrapper/CommentsWrapper";
import * as Styled from "./PostButtonsComments.styles";

interface IPostButtonsCommentsProps extends ILikesModalProps {
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
  onClickShowModalLikes,
}: IPostButtonsCommentsProps) => {
  const dispatch = useAppDispatch();
  const { uid } = useSelector(selectCurrentUser);

  const onClickLike = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const thisID = event.currentTarget.id;
    const newLikesArray = await doLike(postUid, uid, thisID);
    dispatch(updatePostLikes({ likes: newLikesArray, id: thisID }));
  };

  const onClickUnlike = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const thisID = event.currentTarget.id;
    const newLikesArray = await doUnlike(postUid, uid, thisID);
    dispatch(updatePostLikes({ likes: newLikesArray, id: thisID }));
  };

  const IconValue = useMemo(
    () => ({
      size: "22px",
    }),
    []
  );

  return (
    <Styled.BoxShadow hideComments={hideComments}>
      <Styled.ButtonsLikeCommentWrapper>
        <IconContext.Provider value={IconValue}>
          {!isLiked && (
            <Styled.ButtonLike id={id} onClick={onClickLike}>
              <AiOutlineHeart />
            </Styled.ButtonLike>
          )}
          {isLiked && (
            <Styled.ButtonLike id={id} onClick={onClickUnlike}>
              <AiFillHeart />
            </Styled.ButtonLike>
          )}
        </IconContext.Provider>
      </Styled.ButtonsLikeCommentWrapper>
      <CommentsWrapper
        likes={likes}
        comments={comments}
        id={id}
        hideComments={hideComments}
        postUid={postUid}
        onClickShowModalLikes={onClickShowModalLikes}
      />
    </Styled.BoxShadow>
  );
};
