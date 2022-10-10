import {
  Wrapper,
  Img,
  ButtonPost,
  ProfileImg,
  WrapperTopButtons,
  ButtonEdit,
  ButtonMoveToPost,
} from "./FeedPost.styles";
import { BsThreeDots } from "react-icons/bs";
import { IconContext } from "react-icons";
import { PostButtonsComments } from "../PostButtonsComments/PostButtonsComments";
import { collectionGroup, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../services/firebase";
import React, { useContext, useEffect, useState } from "react";
import { RootState } from "../../../store/hooks";
import { useSelector } from "react-redux";
import { LikesModal } from "../LikesModal/LikesModal";
import { LikesModalContext } from "../../../contexts/LikesModalContext";

interface IFeedPostProps {
  username: string;
  profilePic: string;
  description: string;
  image: string;
  comments: string[];
  likes: string[];
  id?: string;
  clickHandler(): void;
}

export const FeedPost = ({
  username,
  profilePic,
  description,
  image,
  comments,
  likes,
  id,
  clickHandler,
}: IFeedPostProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { likesModalID, showModalLikes, onClickPost } =
    useContext(LikesModalContext);
  const currentUser = useSelector(
    (state: RootState) => state.rootReducer.currentUser
  );

  const getData = async () => {
    const posts = query(collectionGroup(db, "posts"));
    onSnapshot(posts, (doc) => {
      doc.docs.forEach((post) => {
        if (post.data()!.id === id) {
          if (
            post
              .data()!
              .likes.some((liker: any) => liker.uid === currentUser.uid)
          ) {
            setIsLiked(true);
          } else {
            setIsLiked(false);
          }
        }
      });
    });
  };

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClickPost(event.currentTarget.id, event);
  };

  useEffect(() => {
    getData();
  }, [clickHandler]);

  return (
    <Wrapper>
      {showModalLikes && <LikesModal id={likesModalID} />}
      <WrapperTopButtons>
        <ButtonPost>
          <ProfileImg src={profilePic} />
          <div>@{username}</div>
        </ButtonPost>
        <ButtonEdit>
          <IconContext.Provider value={{ size: "20px" }}>
            <BsThreeDots />
          </IconContext.Provider>
        </ButtonEdit>
      </WrapperTopButtons>
      <ButtonMoveToPost id={id} onClick={onClick}>
        <Img src={image} />
      </ButtonMoveToPost>
      <PostButtonsComments
        likes={likes}
        comments={comments}
        id={id}
        clickHandler={clickHandler}
        isLiked={isLiked}
        hideComments={false}
      />
    </Wrapper>
  );
};
