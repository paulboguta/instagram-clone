import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "services/firebase";
import { IPost } from "types/post.types";

export const getProfilePosts = async (id: string) => {
  const postsRef = collection(db, "users", id, "posts");
  const posts = await getDocs(postsRef);

  const arr: IPost[] = [];
  posts.forEach((document) => {
    arr.push({
      comments: document.data()!.comments,
      dateAdded: document.data()!.dateAdded,
      description: document.data()!.description,
      id: document.data()!.id,
      image: document.data()!.image,
      likes: document.data()!.likes,
      uid: document.data()!.uid,
      username: document.data()!.username,
    });
  });
  return arr;
};

export const createPost = async (
  uid: string,
  image: string,
  description: string
) => {
  const usersRef = doc(db, "users", uid);
  const userData = await getDoc(usersRef);
  const { username } = userData.data()!;

  const postsRef = collection(db, "users", uid, "posts");
  const docRef = doc(postsRef);
  const postID = docRef.id;
  const date = new Date();
  await setDoc(doc(postsRef, `${docRef.id}`), {
    image,
    description,
    likes: [],
    comments: [],
    username,
    id: postID,
    dateAdded: date,
    uid,
  });

  return { postID, username, date };
};
