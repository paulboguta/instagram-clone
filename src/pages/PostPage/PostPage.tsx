import {
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LikesModalContext } from "../../contexts/LikesModalContext";
import { db } from "../../services/firebase";
import { RootState } from "store/store";
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
import { useNavigate } from "react-router-dom";
import { useWindowDimensions } from "../../hooks/hooks";
import { LikesModal } from "../../components/post/LikesModal/LikesModal";

export const PostPage = () => {
  const [post, setPost] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [userID, setUserID] = useState("");
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState("");
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
        setUserID(doc.data().uid);
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

  const getUserData = async () => {
    const userRef = doc(db, "users", userID);
    const userData = await getDoc(userRef);
    setUsername(userData.data()!.username);
    setProfilePic(userData.data()!.profilePic);
  };

  const clickHandler = () => {};

  useEffect(() => {
    setTimeout(() => {
      getUserData();
      getData();
    }, 500);
  }, [url, clickHandler]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
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
        <MarginTop>
          {showModalLikes && <LikesModal id={likesModalID} />}
        </MarginTop>
        {!loading && (
          <>
            <Img src={post?.image} />
            <div>
              <PostProfileSectionWrapper>
                <ProfilePic src={profilePic} />
                <Username
                  onClick={onClickUsernameMoveToUserProfile}
                  id={post?.uid}
                >
                  @{username}
                </Username>
                {+windowDim.width > 1200 && (
                  <Description>{post?.description}</Description>
                )}
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
