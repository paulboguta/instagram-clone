import { useMemo } from "react";
import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { ILikesModalProps } from "types/likesModal.types";
import { ILike, IPost } from "types/post.types";
import uuid from "react-uuid";
import { Wrapper, ButtonClose, Likes0Info } from "./LikesModal.styles";
import { LikesModalButton } from "./LikesModalButton";

interface ILikesModal extends ILikesModalProps {
  id: string | undefined;
}

export const LikesModal = ({ id, onClickHideModalLikes }: ILikesModal) => {
  const { likes } = useSelector((state: RootState) =>
    state.rootReducer.postReducer.posts.find((post: IPost) => {
      return post.id === id;
    })
  );

  const IconValue = useMemo(
    () => ({
      size: "24px",
    }),
    []
  );

  return (
    <Wrapper>
      <ButtonClose onClick={onClickHideModalLikes}>
        <IconContext.Provider value={IconValue}>
          <AiOutlineClose />
        </IconContext.Provider>
      </ButtonClose>
      {likes.length ? (
        likes.map((like: ILike) => {
          return (
            <LikesModalButton
              key={uuid()}
              uid={like.uid}
              onClickHideModalLikes={onClickHideModalLikes}
            />
          );
        })
      ) : (
        <Likes0Info>0 likes for now...</Likes0Info>
      )}
    </Wrapper>
  );
};
