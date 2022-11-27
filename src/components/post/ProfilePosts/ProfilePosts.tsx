import { IPost } from "types/post.types";
import { Posts } from "./ProfilePosts.style";
import { ProfilePost } from "../ProfilePost/ProfilePost";

interface IProfilePostsProps {
  data: IPost[];
}

export const ProfilePosts = ({ data }: IProfilePostsProps) => {
  return (
    <Posts>
      {
        // sort by most recent
        data
          .sort((a, b) => +b.dateAdded! - +a.dateAdded!)
          .map((post: IPost) => {
            return <ProfilePost src={post.image} key={post.id} id={post.id!} />;
          })
      }
    </Posts>
  );
};
