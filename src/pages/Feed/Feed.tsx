import { useEffect, useState } from "react";
import { IPost } from "types/post.types";
import { getFeedPosts } from "features/posts/posts.service";
import { useAppDispatch } from "hooks/hooks";
import { getFeedPostsAction } from "store/actions/postActions";
import { FeedPost } from "components/post/FeedPost/FeedPost";
import { getAllUsers } from "features/users/users.service";
import { getAllUsersAction } from "store/actions/userActions";
import { Navbar } from "../../components/Navbar/Navbar";
import { FeedPosts, Wrapper } from "./Feed.styles";

export const Feed = () => {
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

  useEffect(() => {
    getPostsData();
    getUsersData();
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <FeedPosts>
        {posts?.map((post) => {
          return <FeedPost id={post.id} />;
        })}
      </FeedPosts>
    </Wrapper>
  );
};
