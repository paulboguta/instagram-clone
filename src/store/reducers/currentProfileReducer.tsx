import { AnyAction } from "redux";
import { ActionTypes } from "store/types";
import { ICurrentProfile } from "features/user/types";

const initialState: ICurrentProfile = {
  username: "",
  profilePic: "",
  bio: "",
  uid: "",
  followers: [],
  following: [],
  isOnOwnProfile: false,
  posts: [],
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
        followers: action.followers,
        following: action.following,
        isOnOwnProfile: action.isOnOwnProfile,
        posts: action.posts,
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
    case ActionTypes.ADD_POST:
      return {
        ...state,
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

    default:
      return state;
  }
};

export default currentProfileReducer;
