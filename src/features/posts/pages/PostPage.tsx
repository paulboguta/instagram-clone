import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { checkIfPostIsLiked } from "features/posts/utils/post.utils";
import { getUserProfileData } from "features/user/services/users.service";
import { IPost } from "features/posts/types";
import { ILikesModalProps } from "types/likesModal.types";
import { selectCurrentUser } from "features/user/store/currentUserSlice";
import * as Styled from "./PostPage.styles";
import { Navbar } from "../../../components/Navbar/Navbar";
import { useWindowDimensions } from "../../../hooks/hooks";
import { LikesModal, PostButtonsComments, Comments } from "../components";
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

  const { postID } = useParams();

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
    <Styled.WrapperAll>
      <Navbar />
      <Styled.Wrapper>
        <Styled.MarginTop>
          {showModalLikes && (
            <LikesModal
              id={post?.id}
              onClickHideModalLikes={onClickHideModalLikes}
            />
          )}
        </Styled.MarginTop>

        {!loading && (
          <>
            <Styled.Img src={post?.image} />
            <div>
              <Styled.PostProfileSectionWrapper>
                <Styled.ProfilePic src={user.profilePic} />
                <Styled.Username
                  onClick={onClickUsernameMoveToUserProfile}
                  id={post?.uid}
                >
                  @{user.username}
                </Styled.Username>
                {windowDim.width > 1200 && (
                  <Styled.Description>{post?.description}</Styled.Description>
                )}
              </Styled.PostProfileSectionWrapper>
              <Styled.WrapperComments>
                {windowDim.width < 1200 && (
                  <Styled.Description>{post?.description}</Styled.Description>
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
              </Styled.WrapperComments>
            </div>
          </>
        )}
      </Styled.Wrapper>
    </Styled.WrapperAll>
  );
};
