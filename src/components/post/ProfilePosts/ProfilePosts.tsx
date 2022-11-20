import { IPost } from "types/post.types";
import { useEffect, useState } from "react";
import { Posts } from "./ProfilePosts.style";
import { ProfilePost } from "../ProfilePost/ProfilePost";

interface IProfilePostsProps {
  data: IPost[];
}

export const ProfilePosts = ({ data }: IProfilePostsProps) => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    setPosts(data);
  }, [data]);
  return (
    <Posts>
      {
        // sort by most recent
        posts
          .sort((a, b) => +b.dateAdded! - +a.dateAdded!)
          .map((post: IPost) => {
            return <ProfilePost src={post.image} key={post.id} id={post.id!} />;
          })
      }
    </Posts>
  );
};
