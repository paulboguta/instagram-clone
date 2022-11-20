import { AnyAction } from "redux";
import { ActionTypes, IUser } from "store/types";

const initialState: IUser = {
  username: "",
  profilePicture: "",
  bio: "",
  userID: "",
  postCounter: 0,
  likedPosts: [],
  followers: [],
  following: [],
  theme: "",
};

const currentUser = (state = initialState, action: AnyAction) => {
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
    default:
      return state;
  }
};

export default currentUser;
