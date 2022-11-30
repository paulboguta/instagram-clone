import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { useLocation, useNavigate } from "react-router-dom";
import { checkIfPostIsLiked } from "utils/post.utils";
import { getUserProfileData } from "features/users/users.service";
import { IPost } from "types/post.types";
import { PostButtonsComments } from "components/post/PostButtonsComments/PostButtonsComments";
import { ILikesModalProps } from "types/likesModal.types";
import { Comments } from "../../components/post/CommentsWrapper/Comments";
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
import { Navbar } from "../../components/Navbar/Navbar";
import { useWindowDimensions } from "../../hooks/hooks";
import { LikesModal } from "../../components/post/LikesModal/LikesModal";

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
  const {
    image,
    description,
    uid: postOwner,
    id,
    likes,
    comments,
  } = useSelector((state: RootState) =>
    state.rootReducer.postReducer.posts.find((post: IPost) => {
      return post.id === postID;
    })
  );
  const { uid } = useSelector(
    (state: RootState) => state.rootReducer.currentUser
  );
  const windowDim = useWindowDimensions();

  const getData = useCallback(async () => {
    const { username, profilePic } = await getUserProfileData(postOwner);
    setUser({ username, profilePic });
  }, [postOwner]);

  const onClickUsernameMoveToUserProfile = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    navigate(`/user/${event.currentTarget.id}`);
  };

  useEffect(() => {
    setIsLiked(checkIfPostIsLiked(likes, uid));
    getData().then(() => setLoading(false));
  }, [getData, likes, uid]);

  return (
    <WrapperAll>
      <Navbar />
      <Wrapper>
        <MarginTop>
          {showModalLikes && (
            <LikesModal id={id} onClickHideModalLikes={onClickHideModalLikes} />
          )}
        </MarginTop>

        {!loading && (
          <>
            <Img src={image} />
            <div>
              <PostProfileSectionWrapper>
                <ProfilePic src={user.profilePic} />
                <Username
                  onClick={onClickUsernameMoveToUserProfile}
                  id={postOwner}
                >
                  @{user.username}
                </Username>
                {windowDim.width > 1200 && (
                  <Description>{description}</Description>
                )}
              </PostProfileSectionWrapper>
              <WrapperComments>
                {windowDim.width < 1200 && (
                  <Description>{description}</Description>
                )}
                <Comments comments={comments} hideComments />
                <PostButtonsComments
                  onClickShowModalLikes={onClickShowModalLikes}
                  likes={likes}
                  comments={comments}
                  id={id}
                  isLiked={isLiked}
                  postUid={postOwner}
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
