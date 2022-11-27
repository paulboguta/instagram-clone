import { AnyAction } from "redux";
import { ActionTypes } from "store/types";
import { IPostState } from "types/post.types";

const initialState: IPostState = {
  posts: [],
};

// interface IAction {
//   type: string;
//   uid: string;
//   image: string;
//   description: string;
//   username: string;
//   profilePic: string;
//   dateAdded: Date;
//   id: string;
//   comments: any[];
//   likes: any[];
//   posts: IPost[];
// }

const postReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.GET_FEED_POSTS:
      return { posts: [...action.posts] };
    case ActionTypes.ADD_POST:
      return {
        posts: [
          ...state.posts,
          {
            uid: action.uid,
            image: action.image,
            description: action.description,
            likes: [],
            comments: [],
            username: action.username,
            id: action.id,
          },
        ],
      };
    case ActionTypes.ADD_COMMENT:
      return {
        posts: state.posts?.map((doc) => {
          if (doc.id === action.id) {
            return {
              ...doc,
              comments: action.comments,
            };
          }
          return { ...doc };
        }),
      };
    case ActionTypes.LIKE_POST:
      return {
        posts: state.posts?.map((doc) => {
          if (doc.id === action.id) {
            return {
              ...doc,
              likes: action.likes,
            };
          }
          return { ...doc };
        }),
      };
    case ActionTypes.UNLIKE_POST:
      return {
        posts: state.posts?.map((doc) => {
          if (doc.id === action.id) {
            return {
              ...doc,
              likes: action.likes,
            };
          }
          return { ...doc };
        }),
      };
    default:
      return state;
  }
};

export default postReducer;
