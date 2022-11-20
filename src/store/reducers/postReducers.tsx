import { ActionTypes } from "store/types";
import { IPostState } from "types/post.types";

const initialState: IPostState = {
  posts: [],
};

interface IAction {
  type: string;
  uid?: string;
  image?: string;
  description?: string;
  username?: string;
  profilePic?: string;
  dateAdded?: Date;
  id?: string;
  comments?: any[];
  likes?: any[];
}

const postReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.ADD_POST:
      return [
        ...state.posts,
        {
          uid: action.uid,
          image: action.image,
          description: action.description,
          likes: [],
          comments: [],
          username: action.username,
          profilePic: action.profilePic,
          dateAdded: action.dateAdded,
          id: action.id,
        },
      ];
    case ActionTypes.ADD_COMMENT:
      return [
        state.posts?.map((doc) => {
          if (doc.id === action.id) {
            return [
              ...state.posts,
              {
                comments: action.comments,
              },
            ];
          }
        }),
      ];
    case ActionTypes.LIKE_POST:
      return [
        state.posts?.map((doc) => {
          if (doc.id === action.id) {
            return [
              ...state.posts,
              {
                likes: action.likes,
              },
            ];
          }
        }),
      ];
    case ActionTypes.UNLIKE_POST:
      return [
        state.posts?.map((doc) => {
          if (doc.id === action.id) {
            return [
              ...state.posts,
              {
                likes: action.likes,
              },
            ];
          }
        }),
      ];
    default:
      return state;
  }
};

export default postReducer;
