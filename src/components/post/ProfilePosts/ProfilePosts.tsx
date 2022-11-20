import { collection, getDocs, query } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { Posts } from "./ProfilePosts.style";
import { ProfilePost } from "../ProfilePost/ProfilePost";
import { ProfileResultContext } from "../../../contexts/ProfileResultContext";
import { db } from "../../../services/firebase";

export interface PostData {
  image: string;
  uid: string;
  description: string;
  likes: [];
  comments: [];
  username: string;
  profilePic: string;
  dateAdded?: Date;
  id?: string;
}

interface IProfilePostsProps {
  confirmed: boolean;
}

export const ProfilePosts = ({ confirmed }: IProfilePostsProps) => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [renderedPosts, setRenderedPosts] = useState<any>();

  const currentUser = useSelector(
    (state: RootState) => state.rootReducer.currentUser
  );
  const { profileClicked, resultClicked } = useContext(ProfileResultContext);

  const id = window.location.pathname.slice(6);
  const url = window.location.pathname.split("/").pop();

  const getDocsSnapshot = async () => {
    const q = query(collection(db, "users", id, "posts"));
    const querySnapshot2 = await getDocs(q);

    if (querySnapshot2.docs.length === 0) {
      setPosts([]);
    } else {
      const arr: PostData[] = [];
      querySnapshot2.forEach((doc: any) => {
        arr.push(doc.data());
      });
      setPosts(arr);
    }
  };

  useEffect(() => {
    getDocsSnapshot();
    // renderPosts();
  }, [currentUser, profileClicked, url, resultClicked, confirmed]);

  useEffect(() => {}, []);

  return (
    <Posts>
      {posts.map((post: any, key: number) => {
        return <ProfilePost src={post.image} key={key} id={post.id} />;
      })}
    </Posts>
  );
};
