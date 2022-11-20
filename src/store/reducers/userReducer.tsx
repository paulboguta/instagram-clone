import { ActionTypes, IUserState } from "../types";

const initialState: IUserState = {
  users: [],
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.DO_SETUP:
      return [
        state.users?.map((doc) => {
          if (doc.userID === action.uid) {
            return [
              ...state.users,
              {
                username: action.username,
                bio: action.bio,
                profilePicture: action.profilePic,
              },
            ];
          }
        }),
      ];

    case ActionTypes.DO_FIRST_SETUP:
      return [
        state.users?.map((doc) => {
          if (doc.userID === action.uid) {
            return [
              ...state.users,
              {
                username: action.username,
                bio: action.bio,
                profilePicture: action.profilePic,
                postCounter: action.postCounter,
                likedPosts: action.likedPosts,
                followers: action.followers,
                following: action.following,
              },
            ];
          }
        }),
      ];
    case ActionTypes.DO_FOLLOW:
      return [
        state.users?.map((doc) => {
          if (doc.userID === action.uid1) {
            return [
              ...state.users,
              {
                following: doc.following.push(action.uid2),
              },
            ];
          }
          if (doc.userID === action.uid2) {
            return [
              ...state.users,
              {
                followers: doc.followers.push(action.uid1),
              },
            ];
          }
        }),
      ];
    case ActionTypes.DO_UNFOLLOW:
      return [
        state.users?.map((doc) => {
          if (doc.userID === action.uid1) {
            return [
              ...state.users,
              {
                following: doc.following.filter((word: string) => {
                  return word !== action.uid2;
                }),
              },
            ];
          }
          if (doc.userID === action.uid2) {
            return [
              ...state.users,
              {
                followers: doc.followers.filter((word: string) => {
                  return word !== action.uid1;
                }),
              },
            ];
          }
        }),
      ];

    default:
      return state;
  }
};

export default user;
