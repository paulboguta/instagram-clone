import { useMemo } from "react";
import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { ILikesModalProps } from "types/likesModal.types";
import { ILike, IPost } from "features/posts/types";
import { selectPosts } from "features/posts/store/postsSlice";
import { Wrapper, ButtonClose, SecondaryText } from "./LikesModal.styles";
import { LikesModalButton } from "./LikesModalButton";

interface ILikesModal extends ILikesModalProps {
  id: string | undefined;
}

export const LikesModal = ({ id, onClickHideModalLikes }: ILikesModal) => {
  const post = useSelector(selectPosts).find((p: IPost) => {
    return p.id === id;
  });

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
      {post?.likes.length ? (
        post.likes.map((like: ILike) => {
          return (
            <LikesModalButton
              key={like.uid}
              uid={like.uid}
              onClickHideModalLikes={onClickHideModalLikes}
            />
          );
        })
      ) : (
        <SecondaryText>0 likes for now...</SecondaryText>
      )}
    </Wrapper>
  );
};
