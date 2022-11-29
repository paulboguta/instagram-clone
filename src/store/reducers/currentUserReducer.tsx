import { AnyAction } from "redux";
import { ActionTypes } from "store/types";
import { ICurrentUser } from "types/user.types";

const initialState: ICurrentUser = {
  username: "",
  profilePic: "",
  bio: "",
  uid: "",
  likedPosts: [],
  followers: [],
  following: [],
  theme: "",
};

const currentUser = (state = initialState, action: AnyAction): ICurrentUser => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_USER:
      return {
        uid: action.uid,
        username: action.username,
        bio: action.bio,
        profilePic: action.profilePic,
        theme: action.theme,
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
    case ActionTypes.DO_FOLLOW:
      return {
        ...state,
        following: action.newFollowing,
      };
    case ActionTypes.DO_UNFOLLOW:
      return {
        ...state,
        following: action.newFollowing,
      };
    case ActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};

export default currentUser;
