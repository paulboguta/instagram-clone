import { useMemo } from "react";
import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { ILikesModalProps } from "types/likesModal.types";
import { ILike, IPost } from "types/post.types";
import { Wrapper, ButtonClose, Likes0Info } from "./LikesModal.styles";
import { LikesModalButton } from "./LikesModalButton";

interface ILikesModal extends ILikesModalProps {
  id: string | undefined;
}

export const LikesModal = ({ id, onClickHideModalLikes }: ILikesModal) => {
  const { likes, id: postID } = useSelector((state: RootState) =>
    state.rootReducer.postReducer.posts.find((post: IPost) => {
      return post.id === id;
    })
  );
  console.log(id, likes, postID);

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
              key={like.uid}
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
