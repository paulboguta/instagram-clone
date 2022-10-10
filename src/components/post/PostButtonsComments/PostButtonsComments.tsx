import {
  ButtonsLikeCommentWrapper,
  ButtonLike,
  BoxShadow,
} from "./PostButtonsComments.styles";
import { CommentsWrapper } from "../CommentsWrapper/CommentsWrapper";
import { IconContext } from "react-icons";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RootState, useAppDispatch } from "../../../store/hooks";
import { likePost, unlikePost } from "../../../store/actions/postActions";
import { useSelector } from "react-redux";

interface IPostButtonsCommentsProps {
  likes: string[];
  comments: string[];
  id: string | undefined;
  clickHandler(): void;
  isLiked: boolean;
  hideComments: boolean;
}

export const PostButtonsComments = ({
  likes,
  comments,
  id,
  clickHandler,
  isLiked,
  hideComments,
}: IPostButtonsCommentsProps) => {
  const dispatch = useAppDispatch();
  const currentUser = useSelector(
    (state: RootState) => state.rootReducer.currentUser
  );

  const onClickLike = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(likePost(currentUser.uid, event.currentTarget.id));
    clickHandler();
    console.log(currentUser.uid);
  };

  const onClickUnlike = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(unlikePost(currentUser.uid, event.currentTarget.id));
    clickHandler();
  };

  return (
    <BoxShadow hideComments={hideComments}>
      <ButtonsLikeCommentWrapper>
        <IconContext.Provider value={{ size: "22px" }}>
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
        clickHandler={clickHandler}
        hideComments={hideComments}
      />
    </BoxShadow>
  );
};
