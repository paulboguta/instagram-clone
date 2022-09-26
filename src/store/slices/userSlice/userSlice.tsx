import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "./types";

const initialState: IUser = {
  userID: "",
  username: "",
  profilePicture: "",
  bio: "",
  postCounter: 0,
  likedPosts: [],
  followers: [],
  following: [],
  theme: "light",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<string>) => {
      state.userID = action.payload;
    },
    getUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    getBio: (state, action: PayloadAction<string>) => {
      if ((action.payload = "")) {
        state.bio = `Hello it's ${state.username}!`;
      } else {
        state.bio = action.payload;
      }
    },
    getProfilePicture: (state, action: PayloadAction<string>) => {
      state.profilePicture = action.payload;
    },
  },
});

export const { setActiveUser, getUsername, getBio, getProfilePicture } =
  userSlice.actions;

export const selectUsername = (state: IUser) => state.username;

export default userSlice.reducer;
