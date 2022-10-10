import { createContext } from "react";

export type LikesModalContext = {
  onClickShowLikesModal(id: string): void;
  onClickHideLikesModal(): void;
  onClickPost(id: string, event: React.MouseEvent<HTMLButtonElement>): void;
  showModalLikes: boolean;
  likesModalID: string;
  postID: string;
};

export const LikesModalContext = createContext<LikesModalContext>({
  onClickShowLikesModal: () => {},
  onClickHideLikesModal: () => {},
  onClickPost: () => {},
  showModalLikes: false,
  likesModalID: "",
  postID: "",
});
