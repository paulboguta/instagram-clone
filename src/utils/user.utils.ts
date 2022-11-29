import { DocumentData, DocumentSnapshot } from "firebase/firestore";
import { IFollower } from "types/user.types";

export const checkIfFollowed = (
  document: DocumentSnapshot<DocumentData>,
  uid: string
) => {
  return document
    .data()!
    .followers.some((follower: IFollower) => follower.uid === uid);
};
