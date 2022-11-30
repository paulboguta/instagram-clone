import { IUserState } from "types/user.types";
import { ActionTypes } from "../types";

const initialState: IUserState = {
  users: [],
};

const usersReducer = (state = initialState, action: any): IUserState => {
  switch (action.type) {
    case ActionTypes.GET_ALL_USERS:
      return { users: action.users };

    case ActionTypes.DO_SETUP:
      return {
        users: state.users?.map((user) => {
          if (user.uid === action.uid) {
            return {
              ...user,
              username: action.username,
              bio: action.bio,
              profilePic: action.profilePic,
              theme: action.theme,
            };
          }
          return { ...user };
        }),
      };
    case ActionTypes.DO_FOLLOW:
      return {
        users: state.users?.map((doc) => {
          if (doc.uid === action.uid1) {
            return {
              ...doc,
              following: action.newFollowing,
            };
          }
          if (doc.uid === action.uid2) {
            return {
              ...doc,
              followers: action.newFollowers,
            };
          }
          return { ...doc };
        }),
      };
    case ActionTypes.DO_UNFOLLOW:
      return {
        users: state.users?.map((doc) => {
          if (doc.uid === action.uid1) {
            return {
              ...doc,
              following: action.newFollowing,
            };
          }
          if (doc.uid === action.uid2) {
            return {
              ...doc,
              followers: action.newFollowers,
            };
          }
          return { ...doc };
        }),
      };

    default:
      return state;
  }
};

export default usersReducer;
