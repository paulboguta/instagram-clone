import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "features/user/services/users.service";
import type { RootState } from "store/store";
import { IUser } from "features/user/types";
import { updateSetupCurrentUser } from "./currentUserSlice";

interface IUsersState {
  users: IUser[];
  loading: boolean;
  error: null | string;
}

const initialState = {
  users: [],
  loading: false,
  error: null,
} as IUsersState;

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const users = await getAllUsers();
  return users;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateFollowUsers: (state, action) => {
      return {
        users: state.users?.map((user) => {
          if (user.uid === action.payload.uid1) {
            return {
              ...user,
              following: action.payload.newFollowing,
            };
          }
          if (user.uid === action.payload.uid2) {
            return {
              ...user,
              followers: action.payload.newFollowers,
            };
          }
          return { ...user };
        }),
        loading: false,
        error: null,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(updateSetupCurrentUser, (state, action) => {
        return {
          users: state.users?.map((user) => {
            if (user.uid === action.payload.uid) {
              return {
                ...user,
                username: action.payload.username,
                bio: action.payload.bio,
                profilePic: action.payload.profilePic,
                theme: action.payload.theme,
              };
            }
            return { ...user };
          }),
          loading: false,
          error: null,
        };
      })
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message!;
      });
  },
});

export const selectUsers = (state: RootState) => state.rootReducer.users.users;
export const selectUsersLoading = (state: RootState) =>
  state.rootReducer.users.loading;

export const { updateFollowUsers } = usersSlice.actions;
