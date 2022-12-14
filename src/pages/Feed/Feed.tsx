import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/store";
import { FeedPost } from "features/posts/components/FeedPost/FeedPost";
import { ILikesModalProps } from "types/likesModal.types";
import { LikesModal } from "features/posts/components/LikesModal/LikesModal";
import { getUsers, selectUsersLoading } from "features/user/store/usersSlice";
import { getPosts, selectPosts } from "features/posts/store/postsSlice";
import { Navbar } from "../../components/Navbar/Navbar";
import { FeedPosts, Wrapper } from "./Feed.styles";

export const Feed = ({
  onClickHideModalLikes,
  showModalLikes,
  onClickShowModalLikes,
  postID,
}: ILikesModalProps) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectUsersLoading);
  const posts = useAppSelector(selectPosts);

  const getPostsData = async () => {
    dispatch(getPosts());
  };

  const getUsersData = () => {
    dispatch(getUsers());
  };

  useEffect(() => {
    getPostsData();
    getUsersData();
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
              key={post.id}
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
