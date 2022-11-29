import { useCallback, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { useNavigate } from "react-router-dom";
import { checkIfPostIsLiked } from "utils/post.utils";
import { getUserProfileData } from "features/users/users.service";
import { IPost } from "types/post.types";
import { LikesModalContext } from "../../contexts/LikesModalContext";
import { Comments } from "../../components/post/CommentsWrapper/Comments";
import { PostButtonsComments } from "../../components/post/PostButtonsComments/PostButtonsComments";
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

export const PostPage = () => {
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({
    username: "",
    profilePic: "",
  });
  const navigate = useNavigate();
  const { likesModalID, showModalLikes, postID } =
    useContext(LikesModalContext);
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
          {showModalLikes && <LikesModal id={likesModalID} />}
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
                <Comments comments={comments} hideComments />
                {windowDim.width < 1200 && (
                  <Description>{description}</Description>
                )}
                <PostButtonsComments
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
