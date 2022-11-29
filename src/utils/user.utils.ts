import { IFollower } from "types/user.types";

export const checkIfFollowed = (followers: IFollower[], uid: string) => {
  return followers.some((follower: IFollower) => follower.uid === uid);
};

export const filterFollowers = (data: IFollower[], uidToFilter: string) => {
  return data.filter((user) => {
    return user.uid !== uidToFilter;
  });
};
