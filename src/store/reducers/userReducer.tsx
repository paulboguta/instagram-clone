import {
  DO_FIRST_SETUP,
  DO_SETUP,
  DO_FOLLOW,
  DO_UNFOLLOW,
} from "../actions/userActions";

import { IUserState } from "../types";

const initialState: IUserState = {
  users: [],
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case DO_SETUP:
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

    case DO_FIRST_SETUP:
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
    case DO_FOLLOW:
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
    case DO_UNFOLLOW:
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
