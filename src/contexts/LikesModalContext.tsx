import { createContext } from "react";

export type LikesModalContext = {
  onClickShowLikesModal(id: string): void;
  onClickHideLikesModal(): void;
  showModalLikes: boolean;
  likesModalID: string;
};

export const LikesModalContext = createContext<LikesModalContext>({
  onClickShowLikesModal: () => {},
  onClickHideLikesModal: () => {},
  showModalLikes: false,
  likesModalID: "",
});
