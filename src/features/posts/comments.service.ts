import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "services/firebase";
import { IComment } from "types/post.types";

export const addComment = async (
  postUid: string,
  commenterUid: string,
  id: string,
  comment: string
) => {
  const postRef = doc(db, `users/${postUid}/posts/`, id);
  const postData = await getDoc(postRef);

  const arr: IComment[] = [];
  if (postData.data()!.comments.length) {
    postData.data()!.comments.map((item: IComment) => {
      return arr.push(item);
    });
  }
  arr.push({
    uid: commenterUid,
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
