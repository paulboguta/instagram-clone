import { BsThreeDots } from "react-icons/bs";
import { IconContext } from "react-icons";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { getUserDataForThisPost } from "features/posts/posts.service";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
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
  isLiked: boolean;
}

export const FeedPost = ({ id, isLiked }: IFeedPostProps) => {
  const [postData, setPostData] = useState({
    username: "",
    profilePic: "",
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

  useEffect(() => {
    getUserDataForThisPost(uid).then((res) =>
      setPostData({ username: res.username, profilePic: res.profilePic })
    );
  }, [uid]);

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
        isLiked={isLiked}
        postUid={uid}
      />
    </Wrapper>
  );
};
