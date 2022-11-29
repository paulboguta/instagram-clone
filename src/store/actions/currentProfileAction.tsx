import { getUserProfileData } from "features/users/users.service";
import { AppDispatch } from "store/store";
import { ActionTypes } from "store/types";

export const setCurrentProfileAction =
  (uid: string, currentUserId: string) => async (dispatch: AppDispatch) => {
    const user = (await getUserProfileData(uid)).data();
    const isOnOwnProfile = currentUserId === uid;
    if (user) {
      dispatch({
        type: ActionTypes.SET_CURRENT_PROFILE,
        uid,
        username: user.username,
        bio: user.bio,
        profilePic: user.profilePic,
        postCounter: user.postCounter,
        followers: user.followers,
        following: user.following,
        isOnOwnProfile,
      });
    }
  };
