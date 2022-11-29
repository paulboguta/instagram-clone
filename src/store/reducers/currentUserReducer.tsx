import { AnyAction } from "redux";
import { ActionTypes } from "store/types";
import { IUser } from "types/user.types";

const initialState: IUser = {
  username: "",
  profilePic: "",
  bio: "",
  uid: "",
  postCounter: 0,
  likedPosts: [],
  followers: [],
  following: [],
  theme: "",
};

const currentUser = (state = initialState, action: AnyAction): IUser => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_USER:
      return {
        uid: action.uid,
        username: action.username,
        bio: action.bio,
        profilePic: action.profilePic,
        theme: action.theme,
        postCounter: action.postCounter,
        likedPosts: action.likedPosts,
        followers: action.followers,
        following: action.following,
      };
    case ActionTypes.DO_SETUP:
      return {
        ...state,
        username: action.username,
        bio: action.bio,
        profilePic: action.profilePic,
        theme: action.theme,
      };
    default:
      return state;
  }
};

export default currentUser;
