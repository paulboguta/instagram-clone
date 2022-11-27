import { BsThreeDots } from "react-icons/bs";
import { IconContext } from "react-icons";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { getUserDataForThisPost } from "features/posts/posts.service";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { checkIfPostIsLiked } from "utils/post.utils";
import { PostButtonsComments } from "../PostButtonsComments/PostButtonsComments";
import {
  Wrapper,
  Img,
  ButtonPost,
  ProfileImg,
  WrapperTopButtons,
  ButtonEdit,
  ButtonMoveToPost,
} from "./FeedPost.styles";
import { LikesModal } from "../LikesModal/LikesModal";
import { LikesModalContext } from "../../../contexts/LikesModalContext";

interface IFeedPostProps {
  id: string | undefined;
}

export const FeedPost = ({ id }: IFeedPostProps) => {
  const [postData, setPostData] = useState({
    username: "",
    profilePic: "",
    isLiked: false,
  });
  const { likesModalID, showModalLikes, onClickPost } =
    useContext(LikesModalContext);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClickPost(event.currentTarget.id, event);
  };

  const { uid, comments, likes, image } = useSelector((state: RootState) =>
    state.rootReducer.postReducer.posts.find((post) => {
      return post.id === id;
    })
  );

  const userID = useSelector(
    (state: RootState) => state.rootReducer.currentUser.uid
  );

  useEffect(() => {
    getUserDataForThisPost(uid).then((res) =>
      setPostData({
        username: res.username,
        profilePic: res.profilePic,
        isLiked: checkIfPostIsLiked(likes, userID),
      })
    );
  }, [uid, likes, userID]);

  const IconValue = useMemo(
    () => ({
      size: "20px",
    }),
    []
  );

  return (
    <Wrapper>
      {showModalLikes && <LikesModal id={likesModalID} />}
      <WrapperTopButtons>
        <ButtonPost>
          <ProfileImg src={postData.profilePic} />
          <div>@{postData.username}</div>
        </ButtonPost>
        <ButtonEdit>
          <IconContext.Provider value={IconValue}>
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
        hideComments={false}
        isLiked={postData.isLiked}
        postUid={uid}
      />
    </Wrapper>
  );
};
