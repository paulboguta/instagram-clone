import { ActionTypes } from "store/types";
import { AppDispatch } from "store/store";
import { createPost } from "features/posts/posts.service";
import { IPost } from "types/post.types";
import { addComment } from "features/posts/comments.service";
import { doLike, doUnlike } from "features/posts/likes.service";

export const getFeedPostsAction =
  (posts: IPost[]) => (dispatch: AppDispatch) => {
    dispatch({
      type: ActionTypes.GET_FEED_POSTS,
      posts,
    });
  };

export const addPost =
  (uid: string, image: string, description: string) =>
  async (dispatch: AppDispatch) => {
    const { username, postID } = await createPost(uid, image, description);
    dispatch({
      type: ActionTypes.ADD_POST,
      uid,
      image,
      description,
      username,
      id: postID,
    });
  };

export const addCommentAction =
  (postUid: string, uid: string, id: string, comment: string) =>
  async (dispatch: AppDispatch) => {
    const arr = await addComment(postUid, uid, id, comment);
    dispatch({
      type: ActionTypes.ADD_COMMENT,
      id,
      comments: arr,
    });
  };

export const likePostAction =
  (postUid: string, likerUID: string, id: string) =>
  async (dispatch: AppDispatch) => {
    const arr = await doLike(postUid, likerUID, id);
    dispatch({
      type: ActionTypes.LIKE_POST,
      likes: arr,
      id,
    });
  };

export const unlikePostAction =
  (postUid: string, likerUID: string, id: string) =>
  async (dispatch: AppDispatch) => {
    const arr = await doUnlike(postUid, likerUID, id);

    dispatch({
      type: ActionTypes.UNLIKE_POST,
      likes: arr,
      id,
    });
  };
