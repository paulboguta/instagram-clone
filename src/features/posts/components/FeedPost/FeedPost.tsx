import { BsThreeDots } from "react-icons/bs";
import { IconContext } from "react-icons";
import React, { useEffect, useMemo, useState } from "react";
import { getUserDataForThisPost } from "features/posts/services/posts.service";
import { useSelector } from "react-redux";
import { checkIfPostIsLiked } from "features/posts/utils/post.utils";
import { useNavigate } from "react-router-dom";
import { ILikesModalProps } from "types/likesModal.types";
import { selectCurrentUser } from "features/user/store/currentUserSlice";
import { selectPosts } from "features/posts/store/postsSlice";
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

  const post = useSelector(selectPosts).find((p) => {
    return p.id === id;
  });

  const { uid: userID } = useSelector(selectCurrentUser);

  useEffect(() => {
    getUserDataForThisPost(post?.uid).then((res) =>
      setPostData({
        username: res.username,
        profilePic: res.profilePic,
        isLiked: checkIfPostIsLiked(post?.likes!, userID),
      })
    );
  }, [post?.uid, post?.likes, userID]);

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
        <Img src={post?.image} />
      </ButtonMoveToPost>
      <PostButtonsComments
        likes={post?.likes!}
        comments={post?.comments!}
        id={id}
        hideComments={false}
        isLiked={postData.isLiked}
        postUid={post?.uid}
        onClickShowModalLikes={onClickShowModalLikes}
      />
    </Wrapper>
  );
};
