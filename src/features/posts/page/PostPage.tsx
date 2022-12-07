import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { checkIfPostIsLiked } from "features/posts/utils/post.utils";
import { getUserProfileData } from "features/user/services/users.service";
import { IPost } from "features/posts/types";
import { PostButtonsComments } from "components/post/PostButtonsComments/PostButtonsComments";
import { ILikesModalProps } from "types/likesModal.types";
import { selectCurrentUser } from "features/user/store/slices/currentUserSlice";
import { Comments } from "../../../components/post/CommentsWrapper/Comments";
import {
  Description,
  Img,
  PostProfileSectionWrapper,
  ProfilePic,
  Username,
  Wrapper,
  WrapperAll,
  WrapperComments,
  MarginTop,
} from "./PostPage.styles";
import { Navbar } from "../../../components/Navbar/Navbar";
import { useWindowDimensions } from "../../../hooks/hooks";
import { LikesModal } from "../../../components/post/LikesModal/LikesModal";
import { selectPosts } from "../store/postsSlice";

export const PostPage = ({
  onClickShowModalLikes,
  onClickHideModalLikes,
  showModalLikes,
}: ILikesModalProps) => {
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({
    username: "",
    profilePic: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const postID = location.pathname.slice(6);
  const post = useSelector(selectPosts).find((p: IPost) => {
    return p.id === postID;
  });

  const { uid } = useSelector(selectCurrentUser);
  const windowDim = useWindowDimensions();

  const getData = useCallback(async () => {
    const { username, profilePic } = await getUserProfileData(post?.uid);
    setUser({ username, profilePic });
  }, [post?.uid]);

  const onClickUsernameMoveToUserProfile = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    navigate(`/user/${event.currentTarget.id}`);
  };

  useEffect(() => {
    setIsLiked(checkIfPostIsLiked(post?.likes!, uid));
    getData().then(() => setLoading(false));
  }, [getData, post?.likes, uid]);

  return (
    <WrapperAll>
      <Navbar />
      <Wrapper>
        <MarginTop>
          {showModalLikes && (
            <LikesModal
              id={post?.id}
              onClickHideModalLikes={onClickHideModalLikes}
            />
          )}
        </MarginTop>

        {!loading && (
          <>
            <Img src={post?.image} />
            <div>
              <PostProfileSectionWrapper>
                <ProfilePic src={user.profilePic} />
                <Username
                  onClick={onClickUsernameMoveToUserProfile}
                  id={post?.uid}
                >
                  @{user.username}
                </Username>
                {windowDim.width > 1200 && (
                  <Description>{post?.description}</Description>
                )}
              </PostProfileSectionWrapper>
              <WrapperComments>
                {windowDim.width < 1200 && (
                  <Description>{post?.description}</Description>
                )}
                <Comments comments={post?.comments} hideComments />
                <PostButtonsComments
                  onClickShowModalLikes={onClickShowModalLikes}
                  likes={post?.likes!}
                  comments={post?.comments!}
                  id={post?.id}
                  isLiked={isLiked}
                  postUid={post?.uid}
                  hideComments
                />
              </WrapperComments>
            </div>
          </>
        )}
      </Wrapper>
    </WrapperAll>
  );
};
