import { ILike } from "types/post.types";

export const checkIfPostIsLiked = (likes: ILike[], uid: string) => {
  return likes.some((like: ILike) => like.uid === uid);
};
