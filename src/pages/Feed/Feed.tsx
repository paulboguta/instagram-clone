import { useEffect, useState } from "react";
import { IPost } from "types/post.types";
import { getFeedPosts } from "features/posts/posts.service";
import { useAppDispatch } from "hooks/hooks";
import { getFeedPostsAction } from "store/actions/postActions";
import { FeedPost } from "components/post/FeedPost/FeedPost";
import { getAllUsers } from "features/users/users.service";
import { getAllUsersAction } from "store/actions/userActions";
import { ILikesModalProps } from "types/likesModal.types";
import { LikesModal } from "components/post/LikesModal/LikesModal";
import { RootState } from "store/store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar } from "../../components/Navbar/Navbar";
import { FeedPosts, Wrapper } from "./Feed.styles";

export const Feed = ({
  onClickHideModalLikes,
  showModalLikes,
  onClickShowModalLikes,
  postID,
}: ILikesModalProps) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<IPost[]>([]);
  const dispatch = useAppDispatch();

  const getPostsData = async () => {
    const postsData = await getFeedPosts();
    dispatch(getFeedPostsAction(postsData));
    setPosts(postsData);
  };

  const getUsersData = async () => {
    const usersData = await getAllUsers();
    dispatch(getAllUsersAction(usersData));
  };

  const { uid } = useSelector(
    (state: RootState) => state.rootReducer.currentUser
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (uid === "") {
      navigate("/signup");
    }
  }, []);

  useEffect(() => {
    getPostsData();
    getUsersData().then(() => setLoading(false));
  }, []);

  return (
    <Wrapper loading={loading}>
      <Navbar />
      {showModalLikes && (
        <LikesModal id={postID} onClickHideModalLikes={onClickHideModalLikes} />
      )}
      <FeedPosts>
        {posts?.map((post) => {
          return (
            <FeedPost
              id={post.id}
              onClickShowModalLikes={onClickShowModalLikes}
              onClickHideModalLikes={onClickHideModalLikes}
              showModalLikes={showModalLikes}
            />
          );
        })}
      </FeedPosts>
    </Wrapper>
  );
};
