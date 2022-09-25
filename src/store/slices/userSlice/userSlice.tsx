import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { doc, setDoc } from "firebase/firestore";
import { IUser } from "./types";
import { db } from "../../../services/firebase";

const initialState: IUser = {
  userID: "",
  name: "",
  username: "",
  profilePicture: "",
  profileBackground: "",
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
  },
});

export const { setActiveUser } = userSlice.actions;

export const selectUsername = (state: IUser) => state.username;

export default userSlice.reducer;
