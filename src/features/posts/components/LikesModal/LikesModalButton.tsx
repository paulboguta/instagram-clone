import { useNavigate } from "react-router-dom";
import { ILikesModalProps } from "types/likesModal.types";
import { useSelector } from "react-redux";
import { IUser } from "features/user/types";
import { selectUsers } from "features/user/store/usersSlice";
import { Button } from "./LikesModal.styles";

interface ILikesModalButtonProps extends ILikesModalProps {
  uid: string;
}

export const LikesModalButton = ({
  uid,
  onClickHideModalLikes,
}: ILikesModalButtonProps) => {
  const navigate = useNavigate();
  const user = useSelector(selectUsers).find((u: IUser) => {
    return u.uid === uid;
  });

  const onClickMoveToThisUser = (event: React.MouseEvent) => {
    navigate(`/user/${event.currentTarget.id}`);
    onClickHideModalLikes!();
  };

  return (
    <Button onClick={onClickMoveToThisUser} id={uid}>
      <img src={user?.profilePic} alt="liker profile img" />
      <div>@{user?.username}</div>
    </Button>
  );
};
