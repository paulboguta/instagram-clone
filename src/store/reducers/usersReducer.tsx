import { IUserState } from "types/user.types";
import { ActionTypes } from "../types";

const initialState: IUserState = {
  users: [],
};

const usersReducer = (state = initialState, action: any) => {
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
    // case ActionTypes.DO_FOLLOW:
    //   return [
    //     state.users?.map((doc) => {
    //       if (doc.uid === action.uid1) {
    //         return [
    //           ...state.users,
    //           {
    //             following: doc.following.push(action.uid2),
    //           },
    //         ];
    //       }
    //       if (doc.uid === action.uid2) {
    //         return [
    //           ...state.users,
    //           {
    //             followers: doc.followers.push(action.uid1),
    //           },
    //         ];
    //       }
    //     }),
    //   ];
    // case ActionTypes.DO_UNFOLLOW:
    //   return [
    //     state.users?.map((doc) => {
    //       if (doc.uid === action.uid1) {
    //         return [
    //           ...state.users,
    //           {
    //             following: doc.following.filter((word: string) => {
    //               return word !== action.uid2;
    //             }),
    //           },
    //         ];
    //       }
    //       if (doc.uid === action.uid2) {
    //         return [
    //           ...state.users,
    //           {
    //             followers: doc.followers.filter((word: string) => {
    //               return word !== action.uid1;
    //             }),
    //           },
    //         ];
    //       }
    //     }),
    //   ];

    default:
      return state;
  }
};

export default usersReducer;
