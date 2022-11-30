import { useNavigate } from "react-router-dom";
import { ILikesModalProps } from "types/likesModal.types";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { IUser } from "types/user.types";
import { Button } from "./LikesModal.styles";

interface ILikesModalButtonProps extends ILikesModalProps {
  uid: string;
}

export const LikesModalButton = ({
  uid,
  onClickHideModalLikes,
}: ILikesModalButtonProps) => {
  const navigate = useNavigate();
  const { username, profilePic } = useSelector((state: RootState) =>
    state.rootReducer.usersReducer.users.find((user: IUser) => {
      return user.uid === uid;
    })
  );

  const onClickMoveToThisUser = (event: React.MouseEvent) => {
    navigate(`/user/${event.currentTarget.id}`);
    onClickHideModalLikes!();
  };

  return (
    <Button onClick={onClickMoveToThisUser} id={uid}>
      <img src={profilePic} alt="liker profile img" />
      <div>@{username}</div>
    </Button>
  );
};
