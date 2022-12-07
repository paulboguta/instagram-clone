import { useEffect, useState } from "react";
import { IPost } from "types/post.types";
import { getFeedPosts } from "features/posts/posts.service";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { getFeedPostsAction } from "store/actions/postActions";
import { FeedPost } from "components/post/FeedPost/FeedPost";
import { ILikesModalProps } from "types/likesModal.types";
import { LikesModal } from "components/post/LikesModal/LikesModal";
import { getUsers, selectUsersLoading } from "user/store/slices/usersSlice";
import { Navbar } from "../../components/Navbar/Navbar";
import { FeedPosts, Wrapper } from "./Feed.styles";

export const Feed = ({
  onClickHideModalLikes,
  showModalLikes,
  onClickShowModalLikes,
  postID,
}: ILikesModalProps) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectUsersLoading);

  const getPostsData = async () => {
    const postsData = await getFeedPosts();
    dispatch(getFeedPostsAction(postsData));
    setPosts(postsData);
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
