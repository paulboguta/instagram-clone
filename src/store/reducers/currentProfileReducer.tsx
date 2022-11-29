import { AnyAction } from "redux";
import { ActionTypes } from "store/types";
import { ICurrentProfile } from "types/user.types";

const initialState: ICurrentProfile = {
  username: "",
  profilePic: "",
  bio: "",
  uid: "",
  postCounter: 0,
  followers: [],
  following: [],
  isOnOwnProfile: false,
};

const currentProfileReducer = (
  state = initialState,
  action: AnyAction
): ICurrentProfile => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_PROFILE:
      return {
        uid: action.uid,
        username: action.username,
        bio: action.bio,
        profilePic: action.profilePic,
        postCounter: action.postCounter,
        followers: action.followers,
        following: action.following,
        isOnOwnProfile: action.isOnOwnProfile,
      };
    case ActionTypes.DO_FOLLOW:
      return {
        ...state,
        followers: action.newFollowers,
      };
    case ActionTypes.DO_UNFOLLOW:
      return {
        ...state,
        followers: action.newFollowers,
      };

    default:
      return state;
  }
};

export default currentProfileReducer;
