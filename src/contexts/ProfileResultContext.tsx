import { createContext } from "react";

export type ProfileResultContext = {
  onResultClick(): void;
  onProfileClick(): void;
  profileClicked: boolean;
  resultClicked: boolean;
};

export const ProfileResultContext = createContext<ProfileResultContext>({
  onResultClick: () => {},
  onProfileClick: () => {},
  profileClicked: false,
  resultClicked: false,
});
