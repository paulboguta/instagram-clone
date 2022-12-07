import { getProfilePosts } from "features/posts/services/posts.service";
import { getUserProfileData } from "features/user/services/users.service";
import { AppDispatch } from "store/store";
import { ActionTypes } from "store/types";

export const setCurrentProfileAction =
  (uid: string, currentUserId: string) => async (dispatch: AppDispatch) => {
    const user = await getUserProfileData(uid);
    const isOnOwnProfile = currentUserId === uid;
    const posts = await getProfilePosts(uid);
    if (user) {
      dispatch({
        type: ActionTypes.SET_CURRENT_PROFILE,
        uid,
        username: user.username,
        bio: user.bio,
        profilePic: user.profilePic,
        followers: user.followers,
        following: user.following,
        isOnOwnProfile,
        posts,
      });
    }
  };
