import { DO_FIRST_SETUP, DO_SETUP } from "../actions/userActions";

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

    default:
      return state;
  }
};

export default user;
