import { BsThreeDots } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useEffect, useMemo, useState } from "react";
import { getUserDataForThisPost } from "features/posts/services/posts.service";
import { useSelector } from "react-redux";
import { checkIfPostIsLiked } from "features/posts/utils/post.utils";
import { useNavigate } from "react-router-dom";
import { ILikesModalProps } from "types/likesModal.types";
import { selectCurrentUser } from "features/user/store/currentUserSlice";
import { selectPosts } from "features/posts/store/postsSlice";
import { PostButtonsComments } from "../PostButtonsComments/PostButtonsComments";
import * as Styled from "./FeedPost.styles";

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
    <Styled.Wrapper>
      <Styled.WrapperTopButtons>
        <Styled.ButtonPost id={id} onClick={onClick}>
          <Styled.ProfileImg src={postData.profilePic} />
          <div>@{postData.username}</div>
        </Styled.ButtonPost>
        <Styled.ButtonEdit>
          <IconContext.Provider value={IconValue}>
            <BsThreeDots />
          </IconContext.Provider>
        </Styled.ButtonEdit>
      </Styled.WrapperTopButtons>
      <Styled.ButtonMoveToPost id={id} onClick={onClick}>
        <Styled.Img src={post?.image} />
      </Styled.ButtonMoveToPost>
      <PostButtonsComments
        likes={post?.likes!}
        comments={post?.comments!}
        id={id}
        hideComments={false}
        isLiked={postData.isLiked}
        postUid={post?.uid}
        onClickShowModalLikes={onClickShowModalLikes}
      />
    </Styled.Wrapper>
  );
};
