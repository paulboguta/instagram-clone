export interface ILikesModalProps {
  onClickShowModalLikes?: (id: string) => void;
  postID?: string;
  onClickHideModalLikes?: () => void;
  showModalLikes?: boolean;
}
