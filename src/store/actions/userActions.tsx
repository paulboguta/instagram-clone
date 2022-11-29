import { ActionTypes } from "store/types";
import { AppDispatch } from "store/store";
import { doSetup } from "features/users/setup.service";
import { IUser } from "types/user.types";
import { doFollow, doUnfollow } from "features/users/follow.service";

export const doSetupAction =
  (
    uid: string,
    username: string,
    bio: string,
    profilePic: string,
    theme: string
  ) =>
  async (dispatch: AppDispatch) => {
    await doSetup(uid, username, bio, profilePic, theme);
    dispatch({
      type: ActionTypes.DO_SETUP,
      username,
      bio,
      uid,
      profilePic,
      theme,
    });
  };

export const getAllUsersAction =
  (users: IUser[]) => async (dispatch: AppDispatch) => {
    dispatch({
      type: ActionTypes.GET_ALL_USERS,
      users,
    });
  };

export const doFollowAction =
  (uid1: string, uid2: string) => async (dispatch: AppDispatch) => {
    const { newFollowing, newFollowers } = await doFollow(uid1, uid2);
    dispatch({
      type: ActionTypes.DO_FOLLOW,
      uid1,
      uid2,
      newFollowing,
      newFollowers,
    });
  };

export const doUnfollowAction =
  (uid1: string, uid2: string) => async (dispatch: AppDispatch) => {
    const { newFollowing, newFollowers } = await doUnfollow(uid1, uid2);
    dispatch({
      type: ActionTypes.DO_UNFOLLOW,
      uid1,
      uid2,
      newFollowing,
      newFollowers,
    });
  };
