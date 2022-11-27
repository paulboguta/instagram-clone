import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "services/firebase";
import { ILike } from "types/post.types";

export const doLike = async (postUid: string, likerUID: string, id: string) => {
  const postRef = doc(db, `users/${postUid}/posts/`, id);
  const postData = await getDoc(postRef);

  const arr: ILike[] = [];
  if (postData.data()!.likes.length) {
    postData.data()!.likes.map((item: ILike) => {
      return arr.push(item);
    });
  }
  arr.push({
    uid: likerUID,
  });

  await setDoc(
    postRef,
    {
      likes: arr,
    },
    { merge: true }
  );
  return arr;
};

export const doUnlike = async (
  postUid: string,
  likerUID: string,
  id: string
) => {
  const postRef = doc(db, `users/${postUid}/posts/`, id);
  const postData = await getDoc(postRef);

  const arr: ILike[] = postData.data()!.likes.filter((item: ILike) => {
    return item.uid !== likerUID;
  });

  await setDoc(
    postRef,
    {
      likes: arr,
    },
    { merge: true }
  );

  return arr;
};
