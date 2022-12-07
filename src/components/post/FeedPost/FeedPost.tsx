import { BsThreeDots } from "react-icons/bs";
import { IconContext } from "react-icons";
import React, { useEffect, useMemo, useState } from "react";
import { getUserDataForThisPost } from "features/posts/posts.service";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { checkIfPostIsLiked } from "utils/post.utils";
import { useNavigate } from "react-router-dom";
import { ILikesModalProps } from "types/likesModal.types";
import { selectCurrentUser } from "user/store/slices/currentUserSlice";
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

interface IFeedPostProps extends ILikesModalProps {
  id: string;
}

export const FeedPost = ({ id, onClickShowModalLikes }: IFeedPostProps) => {
  const [postData, setPostData] = useState({
    username: "",
    profilePic: "",
    isLiked: false,
  });
  const navigate = useNavigate();

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/post/${event.currentTarget.id}`);
  };

  const { uid, comments, likes, image } = useSelector((state: RootState) =>
    state.rootReducer.postReducer.posts.find((post) => {
      return post.id === id;
    })
  );

  const { uid: userID } = useSelector(selectCurrentUser);

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
      <WrapperTopButtons>
        <ButtonPost id={id} onClick={onClick}>
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
        onClickShowModalLikes={onClickShowModalLikes}
      />
    </Wrapper>
  );
};
