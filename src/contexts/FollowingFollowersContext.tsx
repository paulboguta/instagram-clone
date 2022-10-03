import { createContext } from "react";

export type FollowingFollowersContext = {
  onClickShowFollowersModal(): void;
  onClickShowFollowingModal(): void;
  onClickHideModals(): void;
  showFollowers: boolean;
  showFollowing: boolean;
};

export const FollowingFollowersContext =
  createContext<FollowingFollowersContext>({
    onClickShowFollowersModal: () => {},
    onClickShowFollowingModal: () => {},
    onClickHideModals: () => {},
    showFollowers: false,
    showFollowing: false,
  });
