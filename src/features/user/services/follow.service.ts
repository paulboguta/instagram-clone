import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "services/firebase";
import { filterFollowers } from "features/user/utils/user.utils";

export const getData = async (
  userDoingAction: string,
  userReceivingAction: string
) => {
  const userDoingActionRef = doc(db, "users", userDoingAction);
  const userReceivingActionRef = doc(db, "users", userReceivingAction);

  const userDoingActionData = await getDoc(userDoingActionRef);
  const userReceivingActionData = await getDoc(userReceivingActionRef);

  return {
    userDoingActionRef,
    userReceivingActionRef,
    userDoingActionData,
    userReceivingActionData,
  };
};

export const doFollowService = async (
  userDoingAction: string,
  userReceivingAction: string
) => {
  const {
    userDoingActionRef,
    userReceivingActionRef,
    userDoingActionData,
    userReceivingActionData,
  } = await getData(userDoingAction, userReceivingAction);
  const { following: userDoingActionFollowing } = userDoingActionData.data()!;
  const { followers: userReceivingActionFollowers } =
    userReceivingActionData.data()!;

  userDoingActionFollowing.push({
    uid: userReceivingAction,
  });

  userReceivingActionFollowers.push({
    uid: userDoingAction,
  });

  await updateDoc(userDoingActionRef, {
    following: userDoingActionFollowing,
  });

  await updateDoc(userReceivingActionRef, {
    followers: userReceivingActionFollowers,
  });

  return {
    newFollowing: userDoingActionFollowing,
    newFollowers: userReceivingActionFollowers,
  };
};

export const doUnfollowService = async (
  userDoingAction: string,
  userReceivingAction: string
) => {
  const {
    userDoingActionRef,
    userReceivingActionRef,
    userDoingActionData,
    userReceivingActionData,
  } = await getData(userDoingAction, userReceivingAction);

  const { following: userDoingActionFollowing } = userDoingActionData.data()!;
  const { followers: userReceivingActionFollowers } =
    userReceivingActionData.data()!;
  const filteredFollowing = filterFollowers(
    userDoingActionFollowing,
    userReceivingAction
  );
  const filteredFollowers = filterFollowers(
    userReceivingActionFollowers,
    userDoingAction
  );

  await updateDoc(userDoingActionRef, {
    following: filteredFollowing,
  });

  await updateDoc(userReceivingActionRef, {
    followers: filteredFollowers,
  });

  return { newFollowing: filteredFollowing, newFollowers: filteredFollowers };
};
