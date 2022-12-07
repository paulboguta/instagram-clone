import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "features/auth/services/auth.service";
import { getUserProfileData } from "features/user/services/users.service";
import type { RootState } from "store/store";
import { ICurrentUser } from "features/user/types";

interface ISignInProps {
  email: string;
  password: string;
}

interface ICurrentUserState {
  loading: boolean;
  error: null | string;
  user: ICurrentUser;
}

const initialState = {
  loading: false,
  error: null,
  user: {
    username: "",
    profilePic: "",
    bio: "",
    uid: "",
    likedPosts: [],
    followers: [],
    following: [],
    theme: "",
  },
} as ICurrentUserState;

export const getCurrentUser = createAsyncThunk(
  "currentUser/getCurrentUser",
  async ({ email, password }: ISignInProps) => {
    const response = await login(email, password);
    const user = await getUserProfileData(response.user.uid);
    return user;
  }
);

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    updateSetupCurrentUser: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.username,
          bio: action.payload.bio,
          profilePic: action.payload.profilePic,
          theme: action.payload.theme,
        },
      };
    },
    updateFollowCurrentUser: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          following: action.payload.newFollowing,
        },
      };
    },
    setTheme: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          theme: action.payload,
        },
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = {
          uid: action.payload.uid,
          username: action.payload.username,
          bio: action.payload.bio,
          profilePic: action.payload.profilePic,
          followers: action.payload.followers,
          following: action.payload.following,
          theme: action.payload.theme,
          likedPosts: action.payload.likedPosts,
        };
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message!;
      });
  },
});

export const selectCurrentUser = (state: RootState) =>
  state.rootReducer.currentUser.user;

export const { updateSetupCurrentUser, updateFollowCurrentUser, setTheme } =
  currentUserSlice.actions;

export default currentUserSlice.reducer;
