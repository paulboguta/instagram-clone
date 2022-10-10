import { collectionGroup, getDocs, query } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LikesModalContext } from "../../contexts/LikesModalContext";
import { db } from "../../services/firebase";
import { RootState } from "../../store/hooks";
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
} from "./PostPage.styles";
import { Navbar } from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useWindowDimensions } from "../../hooks/hooks";

export const PostPage = () => {
  const [post, setPost] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const navigate = useNavigate();
  const { likesModalID, showModalLikes, postID } =
    useContext(LikesModalContext);
  const currentUser = useSelector(
    (state: RootState) => state.rootReducer.currentUser
  );
  const windowDim = useWindowDimensions();
  const url = window.location.pathname.split("/").pop();

  const getData = async () => {
    const allPosts = query(collectionGroup(db, "posts"));
    const querySnapshot = await getDocs(allPosts);
    querySnapshot.forEach((doc: any) => {
      if (doc.data()!.id === postID) {
        setPost(doc.data());
        if (
          doc.data()!.likes.some((liker: any) => liker.uid === currentUser.uid)
        ) {
          setIsLiked(true);
        } else {
          setIsLiked(false);
        }
      }
    });
  };

  const clickHandler = () => {};

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 500);
  }, [url, clickHandler]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [url]);

  const onClickUsernameMoveToUserProfile = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    navigate(`/user/${event.currentTarget.id}`);
  };

  return (
    <WrapperAll>
      <Navbar />
      <Wrapper>
        {!loading && (
          <>
            <Img src="data:image/png;base64,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" />
            <div>
              <PostProfileSectionWrapper>
                <ProfilePic src="/static/media/Memoji-12.8e853bce5d91156ce10c.png" />
                <Username onClick={onClickUsernameMoveToUserProfile}>
                  @{post?.username}
                </Username>
                {+windowDim.width > 1200 && (
                  <Description>{post?.description}</Description>
                )}
                <hr />
              </PostProfileSectionWrapper>
              <WrapperComments>
                <Comments comments={post?.comments} hideComments={true} />
                {+windowDim.width < 1200 && (
                  <Description>{post?.description}</Description>
                )}
                <PostButtonsComments
                  likes={post?.likes}
                  comments={post?.comments}
                  id={postID}
                  isLiked={isLiked}
                  clickHandler={clickHandler}
                  hideComments={true}
                />
              </WrapperComments>
            </div>
          </>
        )}
      </Wrapper>
    </WrapperAll>
  );
};
