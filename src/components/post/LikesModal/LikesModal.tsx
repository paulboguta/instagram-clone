import { useContext, useEffect, useState } from "react";
import { collectionGroup, getDocs, query, where } from "firebase/firestore";
import { IconContext } from "react-icons";
import { AiOutlineClose } from "react-icons/ai";
import { Wrapper, Button, ButtonClose, Likes0Info } from "./LikesModal.styles";
import { LikesModalContext } from "../../../contexts/LikesModalContext";
import { db } from "../../../services/firebase";
import { LikesModalButton } from "./LikesModalButton";

interface ILikesModalProps {
  id: string;
}

export const LikesModal = ({ id }: ILikesModalProps) => {
  const [likes, setLikes] = useState<any[]>();

  const { onClickHideLikesModal, onClickShowLikesModal } =
    useContext(LikesModalContext);

  const getData = async () => {
    const postsRef = query(collectionGroup(db, "posts"));
    const data = await getDocs(postsRef);
    data.docs.forEach((doc) => {
      if (doc.data()!.id === id) {
        setLikes(doc.data()!.likes);
      }
    });
  };

  useEffect(() => {
    getData();
  }, [onClickShowLikesModal]);
  return (
    <Wrapper>
      <ButtonClose onClick={onClickHideLikesModal}>
        <IconContext.Provider value={{ size: "24px" }}>
          <AiOutlineClose />
        </IconContext.Provider>
      </ButtonClose>
      <>
        {typeof likes !== "undefined" && likes.length > 0 ? (
          likes.map((like: any, key: number) => {
            return <LikesModalButton key={key} uid={like.uid} />;
          })
        ) : (
          <Likes0Info>0 likes for now...</Likes0Info>
        )}
      </>
    </Wrapper>
  );
};
