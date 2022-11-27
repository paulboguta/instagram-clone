import { useEffect, useState } from "react";
import { IPost } from "types/post.types";
import { checkIfPostIsLiked, getFeedPosts } from "features/posts/posts.service";
import { RootState } from "store/store";
import { useSelector } from "react-redux";
import { useAppDispatch } from "hooks/hooks";
import { getFeedPostsAction } from "store/actions/postActions";
import { FeedPost } from "components/post/FeedPost/FeedPost";
import { Navbar } from "../../components/Navbar/Navbar";
import { FeedPosts, Wrapper } from "./Feed.styles";

export const Feed = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { uid } = useSelector(
    (state: RootState) => state.rootReducer.currentUser
  );

  const getData = async () => {
    const postsData = await getFeedPosts();
    dispatch(getFeedPostsAction(postsData));
    setPosts(postsData);
    postsData.forEach((post: IPost) => {
      setIsLiked(checkIfPostIsLiked(post, uid));
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <Navbar />
      <FeedPosts>
        {posts?.map((post) => {
          return <FeedPost isLiked={isLiked} id={post.id} />;
        })}
      </FeedPosts>
    </Wrapper>
  );
};
