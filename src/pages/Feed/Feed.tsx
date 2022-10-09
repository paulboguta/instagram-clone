import { collectionGroup, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { db } from "../../services/firebase";
import { PostData } from "../../components/post/ProfilePosts/ProfilePosts";
import { FeedPosts, Wrapper } from "./Feed.styles";
import { FeedPost } from "../../components/post/FeedPost/FeedPost";

export const Feed = () => {
  const [posts, setPosts] = useState<any[]>();
  const url = window.location.pathname.split("/").pop();

  const getData = async () => {
    const allPosts = query(collectionGroup(db, "posts"));
    const querySnapshot = await getDocs(allPosts);
    const arr: PostData[] = [];
    querySnapshot.forEach((doc: any) => {
      arr.push(doc.data());
    });
    console.log(arr);
    setPosts(arr);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return (
    <Wrapper>
      <Navbar />
      <FeedPosts>
        {posts?.map((post) => {
          return (
            <FeedPost
              username={post.username}
              profilePic={post.profilePic}
              image={post.image}
              description={post.description}
              comments={post.comments}
              likes={post.likes}
            />
          );
        })}
      </FeedPosts>
    </Wrapper>
  );
};
