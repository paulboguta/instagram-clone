import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { FeedPost } from "components/post/FeedPost/FeedPost";
import { ILikesModalProps } from "types/likesModal.types";
import { LikesModal } from "components/post/LikesModal/LikesModal";
import {
  getUsers,
  selectUsersLoading,
} from "features/user/store/slices/usersSlice";
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
