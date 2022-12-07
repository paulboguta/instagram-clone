import { ILike } from "features/posts/types";

export const checkIfPostIsLiked = (likes: ILike[], uid: string) => {
  return likes.some((like: ILike) => like.uid === uid);
};
