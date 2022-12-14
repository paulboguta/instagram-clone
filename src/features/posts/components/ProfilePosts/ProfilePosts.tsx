import { IPost } from "features/posts/types";
import * as Styled from "./ProfilePosts.style";
import { ProfilePost } from "../ProfilePost/ProfilePost";

interface IProfilePostsProps {
  data: IPost[];
}

export const ProfilePosts = ({ data }: IProfilePostsProps) => {
  return (
    <Styled.Posts>
      {
        // sort by most recent
        data
          .sort((a, b) => +b.dateAdded! - +a.dateAdded!)
          .map((post: IPost) => {
            return <ProfilePost src={post.image} key={post.id} id={post.id} />;
          })
      }
    </Styled.Posts>
  );
};
