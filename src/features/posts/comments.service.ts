import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "services/firebase";
import { IComment } from "types/post.types";

export const addComment = async (uid: string, id: string, comment: string) => {
  const postRef = doc(db, `users/${uid}/posts/`, id);
  const postData = await getDoc(postRef);
  console.log(postData);

  const arr: IComment[] = [];
  if (postData.data()!.comments.length) {
    postData.data()!.comments.map((item: IComment) => {
      return arr.push(item);
    });
  }
  arr.push({
    uid,
    comment,
  });

  await setDoc(
    postRef,
    {
      comments: arr,
    },
    { merge: true }
  );

  return arr;
};
