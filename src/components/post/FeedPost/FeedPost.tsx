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
import {
  collectionGroup,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../services/firebase";
import React, { useContext, useEffect, useState } from "react";
import { RootState } from "../../../store/hooks";
import { useSelector } from "react-redux";
import { LikesModal } from "../LikesModal/LikesModal";
import { LikesModalContext } from "../../../contexts/LikesModalContext";

interface IFeedPostProps {
  image: string;
  comments: string[];
  likes: string[];
  id?: string;
  clickHandler(): void;
  uid?: any;
}

export const FeedPost = ({
  comments,
  likes,
  image,
  id,
  uid,
  clickHandler,
}: IFeedPostProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const { likesModalID, showModalLikes, onClickPost } =
    useContext(LikesModalContext);
  const currentUser = useSelector(
    (state: RootState) => state.rootReducer.currentUser
  );

  const getUsersData = async () => {
    const userRef = doc(db, "users", uid);
    const userData = await getDoc(userRef);
    setUsername(userData.data()!.username);
    setProfilePic(userData.data()!.profilePic);
  };

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
    getUsersData();
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
