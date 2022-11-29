import { getUserProfileData } from "features/users/users.service";
import { AppDispatch } from "store/store";
import { ActionTypes } from "store/types";

export const setCurrentUser =
  (uid: string) => async (dispatch: AppDispatch) => {
    const user = await getUserProfileData(uid);
    if (user) {
      dispatch({
        type: ActionTypes.SET_CURRENT_USER,
        uid: user.uid,
        username: user.username,
        bio: user.bio,
        profilePic: user.profilePic,
        theme: user.theme,
        likedPosts: user.likedPosts,
        followers: user.followers,
        following: user.following,
      });
    }
  };

export const setThemeMode =
  (theme: string) => async (dispatch: AppDispatch) => {
    dispatch({
      type: ActionTypes.SET_THEME,
      theme,
    });
  };
